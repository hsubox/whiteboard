class Node:
    def __init__(self, value):
        self.value = value
        self.children = {}

def insert(root, s):
    node = root
    i = 0
    n = len(s)
    while i < n:
        node.value += 1
        if s[i] in node.children:
            node = node.children[s[i]]
            i = i + 1
            continue
        found = False
        for child in node.children:
            if child[0] == s[i]:
                found = True
                val = node.children[child]
                del node.children[child]
                node.children[s[i]] = Node(1)
                node = node.children[s[i]]
                if child[1:] != '':
                    node.children[child[1:]] = val
                i += 1
                break
        if not found:
            node.children[s[i:]] = Node(1)
            node = node.children[s[i:]]
            break

def find(node, s):
    i = 0
    n = len(s)
    while i < n:
        if s[i] in node.children:
            node = node.children[s[i]]
            i = i + 1
            continue
        found = False
        for child in node.children:
            if (child.startswith(s[i:])):
                return 1
        if not found:
            return 0
    return node.value

def printTree(node, level):
    if node.children:
        print " "*level, node.value, ", ".join(node.children)
        for child in node.children:
            printTree(node.children[child], level + 1)


contacts = Node(0)
# n = int(raw_input().strip())
# for a0 in xrange(n):
#     op, contact = raw_input().strip().split(' ')
f = open('radix_tree_input.txt', 'r')
g = open('radix_tree_output.txt', 'r')
n = int(f.readline())
for a0 in xrange(n):
    x = f.readline()
    op, contact = x.strip().split(' ')
    if op == 'add':
        insert(contacts, contact)
        # printTree(contacts, 0)

    if op == 'find':
        print find(contacts, contact)
        # y = int(g.readline())
        # if x != y:
        #     print x, "|", y, "|", contact
        #     printTree(contacts, 0)
