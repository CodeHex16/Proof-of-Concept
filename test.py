from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM

with open("ikea-short.txt", "r") as f:
    context_str = f.read()

template = """Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer. Be gentle.\n\n{context}\n\nQuestion: {question}\nHelpful Answer:"""

prompt = ChatPromptTemplate.from_template(template)

model = OllamaLLM(model="llama3.2:latest")

chain = prompt | model

print(chain.invoke({
    "question":"Buongiorno, ho un lavello FYNDIG, che tipo di garanzia ho?",
    "context": context_str}
))