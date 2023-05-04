
class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def printTree(node, level=0):

    if node != None:
        printTree(node.left, level + 1)
        print(' ' * 4 * level + '-> ' + str(node.val))
        printTree(node.right, level + 1)


def tree_height(node: TreeNode) -> int:
    
    if not node:
        return -1
    
    return 1 + max(tree_height(node.left), tree_height(node.right))


t = TreeNode(1, TreeNode(2, TreeNode(4, TreeNode(7)),TreeNode(9)), TreeNode(3, TreeNode(5), TreeNode(6)))

printTree(t)
print(tree_height(t))
