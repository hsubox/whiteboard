class Node:
    def __init__(self, value):
        self.value = value
        self.children = {}

def insert(root, s):
    node = root
    i = 0
    n = len(s)
    while i < n:
        if s[i] in node.children:
            node.value += 1
            node = node.children[s[i]]
            i = i + 1
        else:
            break
    while i < n:
        node.children[s[i]] = Node(1)
        node = node.children[s[i]]
        i += 1
    node.value += 1

def find(node, key):
    for char in key:
        if char in node.children:
            node = node.children[char]
        else:
            return 0
    return node.value

contacts = Node(0)
n = int(raw_input().strip())
for a0 in xrange(n):
    op, contact = raw_input().strip().split(' ')
    if op == 'add':
        insert(contacts, contact)
    if op == 'find':
        print find(contacts, contact)
