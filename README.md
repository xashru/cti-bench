# CTIBench: A Benchmark for Evaluating LLMs in Cyber Threat Intelligence

# Update

We have released an **updated version of CTIBench** with improved tasks, data, and evaluation.  
**Code and dataset:** [https://github.com/Athena-Software-Group/athenabench](https://github.com/Athena-Software-Group/athenabench)  
**Paper:** [https://arxiv.org/abs/2511.01144](https://arxiv.org/abs/2511.01144)  

Please use this version going forward whenever possible.


## 
This repository contains the data and evaluation scripts for the paper 
[CTIBench: A Benchmark for Evaluating LLMs in Cyber Threat Intelligence](https://arxiv.org/abs/2406.07599), accepted at NeurIPS 2024. CTIBench is a comprehensive suite of benchmark tasks and datasets designed to evaluate Large Language Models (LLMs) in the field of Cyber Threat Intelligence (CTI).


Dataset details can be found at huggingface: https://huggingface.co/datasets/AI4Sec/cti-bench 

`evaluation` directory contains scripts to evaluate model performance and the response for 5 LLMs - ChatGPT3.5, ChatGPT4, Gemini-1.5, LLAMA3-70B, LLAMA3-8B.

`logs` directory contains the unprocessed response from ChatGPT3.5, ChatGPT4 and Gemini-1.5 for the tasks.
