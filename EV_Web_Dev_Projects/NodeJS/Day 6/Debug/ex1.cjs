const inspector = require("inspector");
const fs = require("fs");
const session = new inspector.Session();

session.connect();

session.post("Profiler.enable", (err) => {
    if (err) {
        console.error("Error enabling profiler:", err);
        return;
    }

    session.post("Profiler.start", (err) => {
        if (err) {
            console.error("Error starting profiler:", err);
            return;
        }

        console.log("Profiler started. Profiling for 8 seconds...");
    });
});

setTimeout(() => {
    session.post("Profiler.stop", (err, data) => {
        if (err) {
            console.error("Error stopping profiler:", err);
            return;
        }

        fs.writeFileSync(
            "data.cpuprofile",
            JSON.stringify(data.profile),
            "utf-8"
        );
        console.log("Profile saved to data.cpuprofile");
    });
}, 8000);
