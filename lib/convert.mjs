import fs from "fs";

/**
 * @param {string} filename
 */
export function convert(filename) {
    const contents = fs.readFileSync(filename, { encoding: "utf-8" });

    const benchmark = JSON.parse(contents);

    /** @type {string[]} */
    const lines = [
        `commit: ${benchmark.repository.commit}`,
        `cpu: ${benchmark.system.cpus[0].model}`,
        `goos: ${benchmark.system.platform}`,
        `goarch: ${benchmark.system.arch}`,
    ];
    
    for (const measurement of benchmark.measurements) {
        const name = `${measurement.scenarioName} ${measurement.host.version}`;
        for (const [key, value] of Object.entries(measurement)) {
            if (typeof value === "object" && ["s", "ms"].includes(value.unit)) {
                const label = `Benchmark${name} ${key}`.replace(/[^a-zA-Z0-9]/g, "_");
                for (let sample of value.samples) {
                    lines.push([label, "1", sample.toString(), value.unit+"/op"].join("\t"));
                }
            }
        }
    }
    
    return lines.join("\n");
}
