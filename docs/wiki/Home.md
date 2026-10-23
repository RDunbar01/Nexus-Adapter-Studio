# Current release 2.7.1

[Open browser trial](https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) · [Full installer components](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.1) · [Release notes](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/docs/CHANGELOG_2.7.1.md)

For the adapter check, open **Settings → Browser trial · diagnostics and license → Check WebGPU adapter**.

The installed app and browser edition now use a consistent purple palette, logo and icons. Project and model labels are stacked, and long project names and filenames fit responsive controls. Optimizers, kernels, model admission and training behavior are unchanged.

The current browser and native editions have the same UI changes. The complete ZIP contains the installer and all data parts; keep them together. Data parts are at most 10,000,000 bytes, and individual distributed components are below 20,000,000 bytes. This UI patch does not add model support or establish physical Windows/Radeon qualification.

Personal use and internal commercial testing and evaluation are permitted for Nexus-owned material. Distribution, modification, production deployment and other commercial use require express written consent. Third-party licenses and previous grants remain unchanged. [Evaluation permission](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/COMMERCIAL_EVALUATION_PERMISSION.md).

## Previous release notes (retained unchanged)

# Nexus Adapter Optimization Studio

**Version 2.7.0**

Train and evaluate experimental adapters for supported local language models using your own corpus.

**[Try in your browser](https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html)** · [Download the desktop components](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

Open the trial to inspect the interface and choose **Check WebGPU adapter**. No Python installation is needed. The aim is a quick first look; loading a model or completing a workload depends on the inputs and device.

Native package 2.7.0; browser edition 2.7.

## What it does

- Local model and corpus inputs for admitted adapter-training workflows.
- Training and evaluation controls in a browser interface.
- Architecture, tokenizer, tensor-format and memory checks before supported work.
- Custom WebGPU trials and a separately installed native PyTorch backend.

## Engineering contribution

A focused local interface for testing model adaptation and evaluating the result. Keeping model admission separate from training helps expose unsupported inputs instead of treating every GGUF file as compatible.

## Why a single HTML file?

The browser edition packages its interface, JavaScript, CSS and WGSL kernels in one HTML file. This makes online trials easy to open, link to and inspect without a build step or runtime CDN. The file contains the browser engine, not model weights or the native PyTorch backend.

Use a compatible WebGPU browser over HTTPS. Runtime network requests, native hardware monitoring and local-server bridges are disabled. Actual training or evaluation requires supported inputs. The native PyTorch backend requires the full download.

[English](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home) · [Français](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.fr) · [日本語](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ja) · [한국어](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ko)

## Python and native runtime requirements

- **Recommended launcher: standard 64-bit CPython 3.12.** The installer advertises Python **3.11–3.14**, but the bootstrap itself does not enforce that version range. Opening the installer with another version is not evidence that the native backend is compatible.
- **New AMD runtime installation requires standard, non-free-threaded, 64-bit CPython 3.11–3.14** on Windows 11 **25H2**. Existing runtimes are tested before that installation gate and are reused only when the runtime probe passes; their Python must match their installed PyTorch wheels. No wider Python-version compatibility is certified here.
- The packaged native probe expects **PyTorch 2.14.0+rocm10.1.0**, HIP and the configured RX 7900 XT/XTX device, then performs a finite FP32 forward/backward check. Python, AMD drivers and compiler prerequisites are not installed or changed by this package. Check the [official AMD compatibility matrix](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html) for the exact OS/GPU/driver combination.

These are installer/runtime conditions, not completed physical Windows, WebView2, Radeon or full-model qualification. A successful probe does not qualify every precision, compilation mode or workload.


## Purpose

Train experimental adapters for admitted models using your own corpus, compare against the frozen base and export supported checkpoints. No base model is bundled. A GGUF extension alone does not establish compatibility.

## Choose an edition

### Browser edition

[HTML](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

Use a compatible WebGPU browser on HTTPS or a supported secure localhost origin. The single HTML file contains the custom JavaScript/WGSL engine. Import supported local files. No Python, PyTorch, native service, online dataset download or native GPU telemetry is available; runtime network requests are blocked. GitHub’s source viewer is not an executable trial.

### Installed edition

Download every file in the [2.7.0 package](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0) together, retaining the supplied layout. Keep all numbered `.nxd` data parts beside [Start_Nexus.py](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/Start_Nexus.py) and run `python Start_Nexus.py` with the supported interpreter. Read the [matching guide](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/README.md) and installation summary before confirming. Each `.nxd` part is at most **10,000,000 bytes**; each individual distributed file, before installation, is smaller than **20,000,000 bytes**. The complete archive, reconstructed application, installed files and downloaded models can be larger. Do not mix releases. Native PyTorch settings and tests belong to the installed edition, not the HTML-only trial.

## Evidence and limits

CPU regression and static/DOM checks are not physical Windows/Radeon/WebGPU validation. Compare only equivalent model, corpus, context, batch, precision and backend conditions. Training/recovery, prompt processing and token generation rates are different measurements. No universal compatibility or maximum speed is guaranteed.

## Use and attribution

Rich Dunbar / Nexus Emerging Technology. Personal use and internal commercial testing and evaluation are permitted for Nexus-owned material. Distribution, modification, production deployment and other commercial use require express written consent. Third-party licenses and previously granted rights remain unchanged. [license](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/LICENSE) · [evaluation permission (English)](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/COMMERCIAL_EVALUATION_PERMISSION.md).
