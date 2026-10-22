# Nexus Adapter Optimization Studio

## [Try in your browser](<https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html>) · live browser trial

**The browser trial is live on GitHub Pages.** The exact link above was opened and its trial interface verified on 22 October 2026. This confirms page availability, not full-model execution or physical GPU qualification. The exact [single-file HTML](./Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) is in the repository root; GitHub's source viewer does not execute it.

Open the link and choose **Check WebGPU adapter** to inspect the interface and browser capability. The first-10-seconds goal is to reach the UI and check capability, not to download a model, finish training or guarantee inference. Load time depends on your connection and device.

**Browser trial: no Python required. Native PyTorch backend: full download required.** Download every component in [releases/2.7.0](releases/2.7.0/), not just the HTML or installer. The browser does not contain or run Python/PyTorch. See [Python and native runtime requirements](#python-and-native-runtime-requirements).

## Current release licensing

This Nexus release is not offered under Apache License 2.0. Nexus-owned software may be used only for personal, non-commercial purposes. Any other use, including commercial use, modification or redistribution, requires express written consent from the rights holder. Third-party code, models, datasets and separately licensed components retain their own licenses and notices. Previously granted rights and rights that cannot lawfully be restricted remain unchanged.


> The reviewed source and installer components are published on the main branch, including the self-contained browser HTML. The browser trial linked above is published on GitHub Pages. Native Windows/Radeon qualification remains pending.

**Version 2.7.0 · published source and installer components · experimental software**

Train and evaluate experimental adapters for admitted models using your own local corpus.

A GGUF extension or familiar model-family name does not establish compatibility. Architecture, tokenizer, tensor format, training graph and memory must all pass the application checks. No base model is bundled.

## Browser capabilities and limits

Explore adapter training/evaluation controls with admitted local models and your own corpus. No base model is bundled; architecture, tokenizer, tensor format and memory checks still apply.

Use a compatible WebGPU browser on HTTPS or a supported secure localhost origin. The single file includes its JavaScript, CSS and WGSL kernels without a runtime CDN dependency. Browser GPU work uses the custom JavaScript/WebGPU engine, not PyTorch. Online dataset downloads, server model bridges and native hardware monitoring are unavailable; runtime network requests are blocked. External documentation links open only when selected.

A WebGPU API or adapter check is not a successful arithmetic test, a model-fit result or a performance measurement. Physical Windows 11/Radeon/WebGPU execution remains a separate qualification step.

## Desktop package and installation

The complete installer component set is in [releases/2.7.0](releases/2.7.0/). Download every file in that directory together, preserving subdirectories. Keep all numbered data parts beside [Start_Nexus.py](releases/2.7.0/Start_Nexus.py), then run `python Start_Nexus.py` with a supported Python interpreter. Read the [package guide](releases/2.7.0/README.md) before confirming installation. Each distributed data part is at most 10,000,000 bytes; the reconstructed application can be larger. Do not mix releases.

Final packaging and isolated extraction checks passed independent review. Physical Windows, WebView2 and Radeon runtime qualification remains pending; no hardware acceptance or full-model qualification is claimed.

## Python and native runtime requirements

- **Recommended launcher: standard 64-bit CPython 3.12.** The installer advertises Python **3.11–3.14**, but the bootstrap itself does not enforce that version range. Opening the installer with another version is not evidence that the native backend is compatible.
- **New AMD runtime installation requires standard, non-free-threaded, 64-bit CPython 3.11–3.14** on Windows 11 **25H2**. Existing runtimes are tested before that installation gate and are reused only when the runtime probe passes; their Python must match their installed PyTorch wheels. No wider Python-version compatibility is certified here.
- The packaged native probe expects **PyTorch 2.14.0+rocm10.1.0**, HIP and the configured RX 7900 XT/XTX device, then performs a finite FP32 forward/backward check. Python, AMD drivers and compiler prerequisites are not installed or changed by this package. Check the [official AMD compatibility matrix](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html) for the exact OS/GPU/driver combination.

These are installer/runtime conditions, not completed physical Windows, WebView2, Radeon or full-model qualification. A successful probe does not qualify every precision, compilation mode or workload.

## Measurement and validation

Native PyTorch tests distinguish synthetic scratch fixtures from loaded-model/corpus workloads. Timed training, evaluation, warm-up/compilation, prompt processing and autoregressive generation are different measurements. Report valid target tokens, elapsed time, model, context, batch size, precision, backend and hardware alongside throughput; do not count padding as useful tokens or describe a CPU result as GPU performance.

The source handoff passed recorded CPU regression and frontend checks. Browser editions passed static/DOM checks, not physical GPU arithmetic or performance qualification. A clean scoped test run does not prove absence of bugs. No maximum speed, universal model support or Windows driver certification is promised.

## Project and licensing

Developed by Rich Dunbar / Nexus Emerging Technology using AI-assisted coding and an iterative build–measure–learn process. Existing repository licenses and third-party notices remain authoritative. Model, dataset and upstream-code terms apply separately; this README grants no new reuse rights.

[Previous README, including original research citations and credits](docs/README_PREVIOUS.md). Historical release details there are not claims about this edition.

## Wiki source

[English](docs/wiki/Home.md) · [Français](docs/wiki/Home.fr.md) · [日本語](docs/wiki/Home.ja.md) · [한국어](docs/wiki/Home.ko.md). These are reviewable repository files, not a claim that the live GitHub Wiki has been published.
