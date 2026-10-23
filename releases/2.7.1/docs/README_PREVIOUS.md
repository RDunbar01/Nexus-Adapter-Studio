# Nexus Adapter Studio

## v2.4.0-alpha · bring your own model and corpus

A standalone HTML application for experimental, local WebGPU LoRA training. Load an admitted GGUF model, import your own UTF-8 JSONL examples, train adapters, compare them with the frozen base, and export a resumable `.nxadapter` checkpoint.

**No model weights or training curriculum are bundled.** The two example JSONL files are illustrative format references. The app never imports them automatically.

This is an alpha with model-specific graph contracts. A `.gguf` extension, a family name, or a small quantized download does not establish compatibility, memory fit, or useful training quality.

## Development approach

### Coded with AI assistance

Nexus Adapter Studio was developed by **Rich Dunbar using AI-assisted coding**. Rich directed the project's goals, architecture and development priorities, using AI assistance for implementation, debugging, code review and documentation.

The purpose was to make complex ideas easier to explore and reduce repetitive coding work, while keeping the development process focused on working experiments that could be tested and refined. AI-generated code still requires human review and validation; the documented checks and limitations remain important.

### Built on the Nexus web-based inference engine

Nexus Adapter Studio leverages **Rich's custom web-based inference engine**, developed through hundreds of **build–measure–learn iterations**. The application builds on that foundation to provide experimental local adapter training through JavaScript, WebGPU and WGSL.

On supported dense profiles, its differentiable computation graphs allow selected LoRA parameters to be trained while the original model weights remain frozen. The GPT-oss route retains its separate output-head-only scope.

This shared foundation does not imply universal model support or checkpoint compatibility between Nexus applications. The compatibility and export contracts below define the supported scope of this release.

### Hundreds of iterations: build → measure → learn

The development process followed a repeated cycle:

1. **Build:** Implement an inference capability, training feature or targeted fix.
2. **Measure:** Examine behavior, numerical checks, errors and feedback.
3. **Learn:** Identify limitations, refine the approach and decide what to change.
4. **Repeat:** Test the next revision and check for regressions.

Hundreds of iterations shaped the inference engine and the workflow built around it. This describes the author's development process, rather than a claim that every iteration was a separately published or fully qualified release.

## Start here

1. Extract the application ZIP and open `Nexus_Adapter_Studio.html` in a desktop browser with WebGPU support.
2. If the browser does not permit WebGPU or checkpoint storage from a local file, serve the extracted folder on localhost. For example, with Python installed: `python -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000/Nexus_Adapter_Studio.html`.
3. Select a GGUF file that satisfies one of the profiles below. The app checks metadata, tokenizer, tensor shapes and encodings, then runs a finite-logit smoke test before marking it ready.
4. Follow [CORPUS_GUIDE.md](CORPUS_GUIDE.md). Choose the appropriate formatting mode, explicitly import your JSONL file, then tokenize it.
5. Start with a short answer-token budget, a low adapter rank, a short sequence, and a small batch. Review the held-out loss and generated responses.
6. Export `.nxadapter` checkpoints regularly. Browser storage can be cleared and is not a durable backup.

The HTML contains its runtime and shaders. It requires no Python backend, PyTorch service, model API, or JavaScript CDN for normal use. Python in the localhost example is only an optional file server.

## Compatibility: graph support is not hardware qualification

Every file must satisfy its complete architecture, tokenizer and tensor contract. Unsupported graph features fail explicitly rather than being mapped to a similar-looking model.

| Admitted graph/profile | Trainable adapters | Scope and important restrictions |
| --- | --- | --- |
| SmolLM 1 / SmolLM2 and plain Llama-style graph | Selected transformer projections, output head, or both | Bias-free RMSNorm, full unscaled adjacent-pair GGUF RoPE, SwiGLU and causal MHA/GQA. SmolLM 1 and 2 have separate verified chat templates. Other admitted tokenizer contracts may require explicit raw completion. This is not blanket Llama-family support. |
| Gemma3 text decoder | Selected transformer projections, output head, or both | Dedicated differentiable graph with Q/K norms, local/global attention, post-norms, GELU and NeoX RoPE. Gemma1/2/3n/4, shared-KV, image inputs and vision projectors are unsupported. |
| Qwen2.5-VL-7B-Instruct text decoder | Selected transformer projections, output head, or both | Exact 339-tensor, 7B profile with its checked tokenizer, frozen Q/K/V biases and text-position M-RoPE. No image/video/projector training or blanket Qwen support. |
| Mistral-7B-v0.3 base text | Selected transformer projections, output head, or both | Exact base-model graph/tokenizer profile; use raw completion. Other Mistral-7B variants are not implied. |
| Mistral-Small-3.2-24B-Instruct-2506 text | Selected transformer projections, output head, or both | Exact text decoder, checked Tekken tokenizer and chat framing; raw completion is also available. Separate query and hidden widths. No vision/projector training. Dense memory requirements exceed a 20 GiB GPU. |
| Ministral-3-14B-Reasoning-2512 text | Selected transformer projections, output head, or both | Exact text profile with YaRN and query-temperature semantics, checked Tekken tokenizer and chat framing; raw completion is also available. Dense memory requirements exceed a 20 GiB GPU. Structured reasoning-content fields are unsupported; answers are ordinary strings. |
| GPT-oss-20B | Output head only | Frozen streamed MoE forward graph, Harmony final-answer formatting and FP32 head training. Transformer, router and expert adapters are unavailable. Full-size model loading and speed are unverified. |
| GPT-oss-120B | Unavailable in the released UI | Profile recognized, but loading is blocked by default. A future custom hardware override is not a supported or tested end-user route. |

The Ministral admission schema is derived from pinned official configuration and converter semantics; its full production GGUF tensor directory was not retrieved. Its synthetic graph qualification does not establish production-file compatibility or full-model parity.

### Memory and precision

- Dense-family quantized GGUF matrices are expanded to FP16 or FP32. The base stays frozen, but it still occupies memory. Selecting head-only adapters does not remove that dense base cost.
- This is **not a QLoRA implementation**. The quantized input file size is not the training-memory requirement.
- A rough FP16 matrix-only estimate is two bytes per parameter: 14B is about 28 GB, 24B about 48 GB, and 27B about 54 GB, before activations, adapters, gradients, optimizer state and temporary buffers. These are arithmetic estimates, not measured peak allocations. FP32 matrices require approximately twice that amount.
- Consequently, those 14B/24B/27B dense routes cannot fit a 20 GiB GPU under the current design. Smaller profiles can also fail device-buffer or total-memory limits. No compatibility row is a promise that the user's GPU can run it.
- GPT-oss is a separate packed-weight streaming route. It avoids full dense expansion but adds cache/streaming constraints and is head-only. Its performance has not been measured on the user's hardware.
- The configured budget is a limit supplied by the user, not a measurement of free VRAM. The app also enforces device-buffer limits.
- Maximum training sequence length is 512 tokens; total packed token count is bounded to 4096. A model's larger context metadata does not raise these limits.
- Mixed FP16 uses FP32 accumulation/gradients/optimizer state and a fixed loss scale of 128. Non-finite results stop before an optimizer update. FP16 on physical hardware remains unverified in this release; use FP32 and reload if unstable.

## Make your own corpus

The full schema, grouping rules, limits and examples are in [CORPUS_GUIDE.md](CORPUS_GUIDE.md).

Minimal verified-chat record:

```json
{"prompt":"Your input question","answer":"Your desired response","family_id":"topic-01"}
```

Minimal raw-completion record:

```json
{"prompt":"Question: Your input question\nAnswer: ","completion":"Your desired response","family_id":"topic-01"}
```

Use one complete JSON object per physical line, and at least five independent prompt families. Include every desired delimiter in raw prompts: raw mode adds no role labels, separator or extra newline.

The importer creates a deterministic, sorted-family held-out split, defaulting to 10%. `split` labels do not select evaluation records. Prompt/context tokens are masked; only the final answer suffix and ending tokens are supervised. A token crossing the prompt/answer boundary is included in that supervised suffix.

The supplied examples are tiny schema demonstrations, not a recommended dataset or evidence that a useful adapter will result. Use data you have permission to use, group paraphrases together, and keep evaluation families representative of your intended task.

## What training changes

On supported dense profiles, the actual transformer graph participates in reverse-mode differentiation, while only selected low-rank A/B adapter parameters are optimized. Original model weights remain frozen. GPT-oss exposes only output-head A/B training; there is no transformer/router/expert backpropagation in that route.

The trainer includes token-normalized gradient accumulation, gradient clipping, AdamW, warmup/cosine scheduling, deterministic shuffle, family-separated evaluation and answer-token budgets. It does not perform full-weight pretraining, distributed training, vision training, activation-checkpoint recomputation or FlashAttention.

## Checkpoints and resume

`.nxadapter` is a custom Nexus training-state format. It stores adapters, Adam moments, optimizer step, settings, session cursor, integrity checks and the base/tokenizer identities. Base model weights are not exported.

For exact session continuation, load the same base file, import and prepare the same corpus in the same order with the same formatting and holdout settings, then verify/import the checkpoint and resume. Cross-device numerical results can still differ.

There is no merged-model export, PEFT adapter export, GGUF-LoRA export, safetensors export or direct compatibility promise for another inference engine. The previous head-only JSON checkpoint format is not this format.

## What was checked

See [TESTING.md](TESTING.md) and the included `verification/` receipts for the exact frozen file hash and results.

Verification covers source/UI/import/checkpoint contracts, retained independent tokenizer fixtures, and small synthetic forward/gradient/learning tests using the actual JavaScript/WGSL graphs through native CPU SwiftShader WebGPU. The synthetic tests are useful numerical checks, not full-size model execution.

Unverified: full production-checkpoint numerical parity or training quality; useful downstream task improvement; browser visual/interaction execution; physical GPU/Radeon throughput; physical-GPU FP16 behavior; and large-model memory fit. A finite one-token load smoke test is not a quality or parity benchmark.

## Files and developer build

The application ZIP includes the standalone HTML, this README, release notes, corpus guide, two opt-in schema examples, license/provenance information and verification receipts. It contains no model or tokenizer download.

The separate Source + QA ZIP additionally includes the exact guarded build inputs, a reproducible Python build, portable contract-test sources and a pinned Node development dependency. `SOURCE_BUILD.md` explains which checks are reproducible from that archive and which larger reference fixtures/runtime components are intentionally omitted.

This package is prepared for manual review and a possible GitHub release. It has not been published to GitHub. **No application license has been selected or granted by this package**; review [LICENSE_INFO.md](LICENSE_INFO.md) before publishing or redistributing.

## Background references

These describe the underlying methods/specifications, not performance results for this application.

- Hu et al., [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685).
- Loshchilov and Hutter, [Decoupled Weight Decay Regularization](https://arxiv.org/abs/1711.05101), the AdamW reference.
- Dettmers et al., [QLoRA: Efficient Finetuning of Quantized LLMs](https://arxiv.org/abs/2305.14314), for the distinction from this application's dense expanded-base routes.
- [GGUF format specification](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md).
- [WGSL specification](https://www.w3.org/TR/WGSL/).

Model-specific implementation and source provenance is summarized in `LICENSE_INFO.md`, the `provenance/` records and, in the source archive, the corresponding module README files.
