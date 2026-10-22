# Nexus Adapter Optimization Studio

> Draft documentation staging: application packages and browser HTML are pending a later verified commit. Any proposed version or trial path below is not a shipped release or live trial. Do not merge until package and link checks pass.

**Version 2.7.0 · next-release staging · experimental software**

Train and evaluate experimental adapters for admitted models using your own local corpus.

A GGUF extension or familiar model-family name does not establish compatibility. Architecture, tokenizer, tensor format, training graph and memory must all pass the application checks. No base model is bundled.

## Browser trial: staged, not yet published

[Open the single-file browser edition](./Nexus_Adapter_Optimization_Studio_v2_7_Browser.html). This relative link names the bundled HTML source; GitHub's file viewer does not execute it. An instant browser-trial link will be added only after an HTTPS Pages deployment has been approved and verified. No live deployment is claimed here.

Use a compatible browser with WebGPU on HTTPS or a supported secure localhost origin. Select local inputs through the file pickers. The edition includes its JavaScript, CSS and WGSL kernels in one HTML file, with no runtime CDN dependency. Online dataset downloads, server model bridges, Python, PyTorch and native hardware monitoring are not available in this browser-only build. Runtime network requests are blocked. External documentation links are opened only when selected.

GPU API availability is not a successful arithmetic test or proof that a model fits. Physical Windows 11/Radeon/WebGPU execution remains a separate qualification step.

## Desktop package and installation

The staged desktop distribution is one ZIP containing the Python installer and its data parts. Extract the entire ZIP together before launching the installer; keep all parts beside the installer in the layout supplied by the package. Each distributed data component must be smaller than 20,000,000 bytes. The reconstructed application, installed files, downloaded model weights and total ZIP can be larger.

The final package manifest is the authority for the exact installer filename, hashes, dependencies and launch command. Do not run an installer from a different release against these data parts. Read its change summary before confirming installation. Packaging and Windows acceptance are release gates, not implied by this README.

## Measurement and validation

Native PyTorch tests distinguish synthetic scratch fixtures from loaded-model/corpus workloads. Timed training, evaluation, warm-up/compilation, prompt processing and autoregressive generation are different measurements. Report valid target tokens, elapsed time, model, context, batch size, precision, backend and hardware alongside throughput; do not count padding as useful tokens or describe a CPU result as GPU performance.

The source handoff passed recorded CPU regression and frontend checks. Browser editions passed static/DOM checks, not physical GPU arithmetic or performance qualification. A clean scoped test run does not prove absence of bugs. No maximum speed, universal model support or Windows driver certification is promised.

## Project and licensing

Developed by Rich Dunbar / Nexus Emerging Technology using AI-assisted coding and an iterative build–measure–learn process. Existing repository licenses and third-party notices remain authoritative. Model, dataset and upstream-code terms apply separately; this README grants no new reuse rights.

[Previous README, including original research citations and credits](docs/README_PREVIOUS.md). Historical release details there are not claims about this staged edition.

## Wiki source

[English](docs/wiki/Home.md) · [Français](docs/wiki/Home.fr.md) · [日本語](docs/wiki/Home.ja.md) · [한국어](docs/wiki/Home.ko.md). These are reviewable repository files, not a claim that the live GitHub Wiki has been published.
