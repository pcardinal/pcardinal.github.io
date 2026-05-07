import { dotnet } from './_framework/dotnet.js'

const is_browser = typeof window != "undefined";
if (!is_browser) throw new Error(`Expected to be running in a browser`);

const dotnetRuntime = await dotnet
    .withDiagnosticTracing(false)
    .create();

const config = dotnetRuntime.getConfig();

try {
    await dotnetRuntime.runMain(config.mainAssemblyName, [globalThis.location.href]);
} catch (err) {
    console.error("WASM runMain failed:", err);
    const out = document.getElementById("out");
    if (out) {
        out.innerHTML = `<div style="color:red;padding:20px;font-family:monospace">
            <b>WASM startup error:</b><br><pre>${String(err)}\n${err?.stack ?? ""}</pre>
        </div>`;
    }
}
