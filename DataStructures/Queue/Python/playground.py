# run this playground: pipenv run queue

from queue import Queue

q = Queue()
q.enqueue(1)
q.enqueue(2)
print(q.to_string())
q.dequeue()
print(q.to_string())
