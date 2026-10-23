# Nexus Adapter Optimization Studio

**Version 2.7.1**

Train and evaluate experimental adapters for supported local language models using your own corpus.

**[Try in your browser](https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html)** · [Download the desktop components](releases/2.7.1/) · [Wiki](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki)

Open the trial to inspect the interface and open **Settings → Browser trial · diagnostics and license → Check WebGPU adapter**. No Python installation is needed. The aim is a quick first look, not a promise that a model will load or finish a workload in seconds.

## Interface update 2.7.1

Both the installed application and browser edition use the purple palette, matching logo and icons. Project and model labels are stacked, and long project names and filenames fit responsive controls. This is a presentation update; model admission, optimizers, kernels and training behavior are unchanged.

## What it does

- Local model and corpus inputs for admitted adapter-training workflows.
- Training and evaluation controls in a browser interface.
- Architecture, tokenizer, tensor-format and memory checks before supported work.
- Custom WebGPU trials and a separately installed native PyTorch backend.

## Engineering contribution

A focused local interface for testing model adaptation and evaluating the result. Keeping model admission separate from training helps expose unsupported inputs instead of treating every GGUF file as compatible.

## Model requirements

No base model is bundled. The selected model must match the implemented architecture, tokenizer, tensor format and training graph, and fit the available memory. A familiar model name or a `.gguf` extension alone is not a compatibility check.

## Why a single HTML file?

The browser edition packages its interface, JavaScript, CSS and WGSL kernels in one HTML file. This makes online trials easy to open, share as a link and inspect without a build step or runtime CDN. The monolithic file is a distribution choice for accessible trials, not a claim that every model or native dependency fits inside it.

Use a compatible WebGPU browser over HTTPS. The trial uses the custom browser engine, not PyTorch. Runtime network requests, native hardware monitoring and local-server bridges are disabled. Supply supported local inputs for actual training or evaluation.

## Full application and Python

**The native PyTorch backend requires the full download.** Get every file in [releases/2.7.1](releases/2.7.1/), keep the numbered data parts beside [Start_Nexus.py](releases/2.7.1/Start_Nexus.py), and run `python Start_Nexus.py`. Review the installation plan before confirming. Do not mix release components.

Use standard **64-bit CPython 3.12** for the launcher. The advertised installer range is 3.11–3.14; actual native compatibility also depends on the selected Python/PyTorch runtime and its probe. The new AMD-runtime installation path checks standard, non-free-threaded x64 CPython 3.11–3.14 and Windows 11 25H2; an existing runtime must pass its probe. See the [runtime and validation notes](docs/TECHNICAL_NOTES.md) and [package guide](releases/2.7.1/README.md) for exact conditions. Python, GPU drivers and compilers are not silently replaced.

Each data part is at most 10,000,000 bytes; each individual distribution file is below 20,000,000 bytes. Reconstructed files, installed files and model weights can be larger.

The complete ZIP is named `Nexus_adapter_2.7.1_Full.zip`. Extract it with all supplied installer data parts; do not mix versions. The Git repository also supplies those components separately.

## Validation

Recorded CPU regressions, frontend checks and package-integrity checks cover the published sources. Browser launch checks establish that the interface opens; they do not establish full-model correctness or physical Windows/Radeon performance. A WebGPU adapter check is only a capability check.

## Use and attribution

Developed by Rich Dunbar / Nexus Emerging Technology. Personal use and internal commercial testing and evaluation are permitted for Nexus-owned material. Distribution, modification, production deployment and other commercial use require express written consent. Third-party licenses and previously granted rights remain unchanged. See the [license](LICENSE) and [evaluation permission](COMMERCIAL_EVALUATION_PERMISSION.md).
