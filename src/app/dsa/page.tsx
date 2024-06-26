import React from "react";
import Markdown from "react-markdown";

const insert_circle = `
#include<stdio.h>
#include<stdlib.h>
struct Node
{
  int data;
  struct Node *next;
};
void insertStart (struct Node **head, int data)
{
  struct Node *newNode = (struct Node *) malloc (sizeof (struct Node));
  newNode->data = data;

  // if its the first node being entered
  if (*head == NULL)
    {
      *head = newNode;
      (*head)->next = *head;
      return;
    }

  // if LL already as >=1 node
  struct Node *curr = *head;

  // traverse till last node in LL
  while (curr->next != *head)
    {
      curr = curr->next;
    }
  // assign LL's last node's next as this new node
  curr->next = newNode;

  // assign newNode's next as current head
  newNode->next = *head;

  // change head to this new node
  *head = newNode;
}

void insertLast (struct Node **head, int data)
{
  struct Node *newNode = (struct Node *) malloc (sizeof (struct Node));
  newNode->data = data;

  // if its the first node being entered
  if (*head == NULL)
    {
      *head = newNode;
      (*head)->next = *head;
      return;
    }

  // if LL already as >=1 node
  struct Node *curr = *head;

  // traverse till last node in LL
  while (curr->next != *head)
    {
      curr = curr->next;
    }

  // assign LL's current last node's next as this new node
  curr->next = newNode;

  // assign this new node's next as current head of LL
  newNode->next = *head;
}

int getCurrSize (struct Node *node)
{
  int size = 0;

  while (node != NULL)
    {
      node = node->next;
      size++;
    }
  return size;
}

void insertPosition (int data, int pos, struct Node **head)	
//function to insert element at specific position
{
  struct Node *newnode, *curNode;
  int i;

  if (*head == NULL)
    {
      printf ("List is empty");
    }
  if (pos == 1)
    {
      insertStart (head, data);
      return;
    }
  else
    {
      newnode = (struct Node *) malloc (sizeof (struct Node));
      newnode->data = data;
      curNode = *head;
      while (--pos > 1)
	{
	  curNode = curNode->next;
	}
      newnode->next = curNode->next;
      curNode->next = newnode;
    }
}

void display (struct Node *head)
{
  // if there are no node in LL
  if (head == NULL)
    return;

  struct Node *temp = head;

  //need to take care of circular structure of LL
  do
    {
      printf ("%d ", temp->data);
      temp = temp->next;

    }
  while (temp != head);
  printf ("\n");
}

int main ()
{

  struct Node *head = NULL;
  
  printf("Insert at beginning: ");
  insertStart (&head, 2);
  insertStart (&head, 1);
  display (head);

  printf("Insert at End: ");
  insertLast (&head, 30);
  insertLast (&head, 40);
  display (head);

  printf("Insert at Specific Position: ");
  insertPosition (5, 3, &head);
  display (head);

  return 0;
}
`;

const delete_circle = `
#include<stdio.h>
#include<stdlib.h>
// structure for Circular Linked List
struct Node
{
  int data;
  struct Node *next;
};

int calcSize (struct Node *head);

void deleteBegin (struct Node **head)
{

  struct Node *tempNode = *head;

  // if there are no nodes in Linked List can't delete
  if (*head == NULL)
    {
      printf ("Linked List Empty, nothing to delete");
      return;
    }

  // if only 1 node in CLL
  if (tempNode->next == *head)
    {
      *head = NULL;
      return;
    }

  struct Node *curr = *head;

  // traverse till last node in CLL
  while (curr->next != *head)
    curr = curr->next;

  // assign last node's next to 2nd node in CLL
  curr->next = (*head)->next;

  // move head to next node
  *head = (*head)->next;
  free (tempNode);
}

void deleteEnd (struct Node **head)
{
  struct Node *tempNode = *head;
  struct Node *previous;

  // if there are no nodes in Linked List can't delete
  if (*head == NULL)
    {
      printf ("Linked List Empty, nothing to delete");
      return;
    }

  // if Linked List has only 1 node
  if (tempNode->next == *head)
    {
      *head = NULL;
      return;
    }

  // else traverse to the last node
  while (tempNode->next != *head)
    {
      // store previous link node as we need to change its next val
      previous = tempNode;
      tempNode = tempNode->next;
    }
  // Curr assign 2nd last node's next to head
  previous->next = *head;
  // delete the last node
  free (tempNode);
  // 2nd last now becomes the last node
}

void deletePos (struct Node **head, int n)
{

  int size = calcSize (*head);

  if (n < 1 || size < n)
    {
      printf ("Can't delete, %d is not a valid position\n", n);
    }
  else if (n == 1)
    deleteBegin (head);
  else if (n == size)
    deleteEnd (head);
  else
    {
      struct Node *tempNode = *head;
      struct Node *previous;	// traverse to the nth node
      while (--n)
	{ // store previous link node as we need to change its next val 
	  previous = tempNode;
	  tempNode = tempNode->next;
	}

      // change previous node's next node to nth node's next node
      previous->next = tempNode->next;
      // delete this nth node
      free (tempNode);
    }
}

void insert (struct Node **head, int data)
{
  struct Node *newNode = (struct Node *) malloc (sizeof (struct Node));
  newNode->data = data;

  if (*head == NULL)
    {
      *head = newNode;
      (*head)->next = *head;
      return;
    }

  struct Node *curr = *head;

  while (curr->next != *head)
    {
      curr = curr->next;
    }

  curr->next = newNode;
  newNode->next = *head;
  *head = newNode;
}

int calcSize (struct Node *head)
{
  int size = 0;
  struct Node *temp = head;

  if (temp == NULL)
    return size;

  do
    {
      size++;
      temp = temp->next;

    }
  while (temp != head);

  return size;
}

void display (struct Node *head)
{
  // if there are no node in CLL
  if (head == NULL)
    return;

  struct Node *temp = head;

  //need to take care of circular structure of CLL
  do
    {
      printf ("%d ", temp->data);
      temp = temp->next;

    }
  while (temp != head);
  printf ("\n");
}

int main ()
{

  // first node will be null at creation    
  struct Node *head = NULL;

  insert (&head, 10);
  insert (&head, 11);
  insert (&head, 12);
  insert (&head, 13);
  insert (&head, 14);
  insert (&head, 15);
  insert (&head, 16);

  display (head);

  deleteBegin (&head);
  display (head);

  deleteEnd (&head);
  display (head);

  deletePos (&head, 3);
  display (head);

  return 0;
}`;

const traversal_article = `
void printList(struct Node *first)
{
	struct Node *temp = first; 

	// If linked list is not empty
	if (first != NULL) 
	{
		// Keep printing nodes till we reach the first node again
		do
		{
			printf("%d ", temp->data);
			temp = temp->next;
		}
		while (temp != first);
	}
}
`;

const insert_double_linked_list = `
#include <stdio.h>
#include <stdlib.h>

// Structure of a node
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Function to insert a node at the beginning of the list
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    if (*head == NULL) {
        newNode->next = newNode;
        newNode->prev = newNode;
        *head = newNode;
    } else {
        newNode->next = *head;
        newNode->prev = (*head)->prev;
        (*head)->prev->next = newNode;
        (*head)->prev = newNode;
        *head = newNode;
    }
}

// Function to insert a node at the end of the list
void insertAtEnd(struct Node** head, int data) {
    if (*head == NULL) {
        insertAtBeginning(head, data);
        return;
    }
    struct Node* newNode = createNode(data);
    newNode->next = *head;
    newNode->prev = (*head)->prev;
    (*head)->prev->next = newNode;
    (*head)->prev = newNode;
}

// Function to insert a node at the middle of the list
void insertAtMiddle(struct Node** head, int data, int position) {
    if (position <= 0) {
        printf("Invalid position\n");
        return;
    }
    if (position == 1) {
        insertAtBeginning(head, data);
        return;
    }
    struct Node* newNode = createNode(data);
    struct Node* current = *head;
    for (int i = 1; i < position - 1 && current->next != *head; i++) {
        current = current->next;
    }
    if (current->next == *head) {
        printf("Position out of range\n");
        return;
    }
    newNode->next = current->next;
    newNode->prev = current;
    current->next->prev = newNode;
    current->next = newNode;
}

// Function to display the list
void displayList(struct Node* head) {
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    struct Node* current = head;
    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != head);
    printf("\n");
}

// Main function
int main() {
    struct Node* head = NULL;

    // Inserting nodes
    insertAtBeginning(&head, 10);
    insertAtEnd(&head, 20);
    insertAtMiddle(&head, 15, 2);

    // Displaying the list
    printf("Doubly Circular Linked List: ");
    displayList(head);

    return 0;
}
`;

const delete_double_linked_list = `
#include <stdio.h>
#include <stdlib.h>

// Structure of a node
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Function to insert a node at the beginning of the list
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    if (*head == NULL) {
        newNode->next = newNode;
        newNode->prev = newNode;
        *head = newNode;
    } else {
        newNode->next = *head;
        newNode->prev = (*head)->prev;
        (*head)->prev->next = newNode;
        (*head)->prev = newNode;
        *head = newNode;
    }
}

// Function to delete a node from the beginning of the list
void deleteFromBeginning(struct Node** head) {
    if (*head == NULL) {
        printf("List is empty\n");
        return;
    }
    struct Node* temp = *head;
    if ((*head)->next == *head) {
        *head = NULL;
    } else {
        (*head)->prev->next = (*head)->next;
        (*head)->next->prev = (*head)->prev;
        *head = (*head)->next;
    }
    free(temp);
}

// Function to delete a node from the end of the list
void deleteFromEnd(struct Node** head) {
    if (*head == NULL) {
        printf("List is empty\n");
        return;
    }
    struct Node* temp = (*head)->prev;
    if ((*head)->next == *head) {
        *head = NULL;
    } else {
        temp->prev->next = *head;
        (*head)->prev = temp->prev;
    }
    free(temp);
}

// Function to delete a node from the middle of the list
void deleteFromMiddle(struct Node** head, int position) {
    if (*head == NULL) {
        printf("List is empty\n");
        return;
    }
    if (position <= 0) {
        printf("Invalid position\n");
        return;
    }
    if (position == 1) {
        deleteFromBeginning(head);
        return;
    }
    struct Node* current = *head;
    for (int i = 1; i < position && current->next != *head; i++) {
        current = current->next;
    }
    if (current->next == *head) {
        printf("Position out of range\n");
        return;
    }
    current->prev->next = current->next;
    current->next->prev = current->prev;
    free(current);
}

// Function to display the list
void displayList(struct Node* head) {
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    struct Node* current = head;
    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != head);
    printf("\n");
}

// Main function
int main() {
    struct Node* head = NULL;

    // Inserting nodes
    insertAtBeginning(&head, 10);
    insertAtBeginning(&head, 20);
    insertAtBeginning(&head, 30);
    insertAtBeginning(&head, 40);

    // Displaying the list
    printf("Doubly Circular Linked List: ");
    displayList(head);

    // Deleting nodes
    deleteFromBeginning(&head);
    deleteFromEnd(&head);
    deleteFromMiddle(&head, 2);

    // Displaying the list after deletion
    printf("Doubly Circular Linked List after deletion: ");
    displayList(head);

    return 0;
}
`;

const traversal_double_linked_list = `
#include <stdio.h>
#include <stdlib.h>

// Structure of a node
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    newNode->prev = NULL;
    return newNode;
}

// Function to insert a node at the beginning of the list
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    if (*head == NULL) {
        newNode->next = newNode;
        newNode->prev = newNode;
        *head = newNode;
    } else {
        newNode->next = *head;
        newNode->prev = (*head)->prev;
        (*head)->prev->next = newNode;
        (*head)->prev = newNode;
        *head = newNode;
    }
}

// Function to traverse and print the doubly circular linked list
void traverseList(struct Node* head) {
    if (head == NULL) {
        printf("List is empty\n");
        return;
    }
    struct Node* current = head;
    do {
        printf("%d ", current->data);
        current = current->next;
    } while (current != head);
    printf("\n");
}

// Main function
int main() {
    struct Node* head = NULL;

    // Inserting nodes
    insertAtBeginning(&head, 10);
    insertAtBeginning(&head, 20);
    insertAtBeginning(&head, 30);
    insertAtBeginning(&head, 40);

    // Displaying the list
    printf("Doubly Circular Linked List: ");
    traverseList(head);

    return 0;
}
`;

function ContentDisplay({ content }: { content: string }) {
  return (
    <div className="p-4 bg-slate-900 text-wrap rounded-xl text-xs text-white">
      <Markdown>{"```\n" + content + "\n```"}</Markdown>
    </div>
  );
}

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <>
      <div className="collapse bg-slate-800 text-white">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          {question}
        </div>
        <div className="collapse-content">
          <Markdown>{answer}</Markdown>
        </div>
      </div>
    </>
  );
};

const faqs = [
  {
    question: "What is Hashing?",
    answer:
      `Hashing is a mathematical function that converts data into a string of letters and numbers that can't be reversed or decoded. Hashing is used in cybersecurity to protect sensitive information like passwords, documents, and messages. The process uses hash functions and algorithms to assign a numeric value to a string, which makes data retrieval faster and enables encryption

      unsigned long hash_function(const char *key, int array_size) {
        unsigned long hash_value = 0;
        const char *c;
        for (c = key; *c != '\\0'; ++c) {
          hash_value += *c;
        }
        return hash_value % array_size;
      }
      `,
  }, 
  {
    question: "Why Hashing?",
    answer:
      `
      Applications:

Hashing has numerous applications across computer science. Here are a few common ones:

    - Data Integrity
    - Data Lookups
    - Password Storage

      `,
  }, 
  {
    question: "What is a B+ Tree?",
    answer: `A B+ Tree is a self-balancing tree data structure designed for efficient searching and retrieval of data, particularly for large datasets stored on disk. It's an improvement over Binary Search Trees (BSTs) due to its ability to handle larger amounts of data efficiently.
    
    # Traversing a B+ Tree
    void inOrderTraversal(struct bPlusTreeNode *node) {
      if (node != NULL) {
        // If it's not a leaf node, recurse on the left child
        if (!node->isLeaf) {
          inOrderTraversal(node->children[0]);
        }
    
        // Print all keys in the current node
        for (int i = 0; i < node->numKeys; i++) {
          printf("%d ", node->keys[i]);
        }
    
        // If it's not a leaf node, recurse on the right children (up to numKeys)
        if (!node->isLeaf) {
          for (int i = 0; i < node->numKeys + 1; i++) {
            inOrderTraversal(node->children[i]);
          }
        }
      }
    }
    
    `
  },
  {
    question: "Why Use B+ Trees? - Need and Applications",
    "answer": `B+ Trees are widely used in database management systems and file systems due to their efficiency in handling large amounts of data. Here are a few reasons why B+ Trees are preferred over other data structures:  

    - Efficient Searching 
    - Disk-Based Storage 
    - Range Queries
    - Sequential Access

    `
  },
  {
    question: "What are Heaps?",
    answer: `A Heap is a specialized tree-based data structure that satisfies the heap property. It's commonly used to implement priority queues and sorting algorithms. There are two main types of heaps:


    - Max Heap 
    - Min Heap.

    // Inserting an Element into a Max Heap
    void insertMaxHeap(int heap[], int n, int key) {
      n = n + 1;
      int i = n - 1;
      heap[i] = key;
    
      // Fix the max heap property
      while (i != 0 && heap[parent(i)] < heap[i]) {
        swap(&heap[i], &heap[parent(i)]);
        i = parent(i);
      }
    }
    
    `
  },
  {
    question: "Application of Heaps",
    answer: `Applications of Heaps: 
    
    - Priority Queues 
    - Dijkstra's Algorithm 
    - Heap Sort 
    - Memory Management 
    - Job Scheduling
    `
  },
  {
    question: "What are Binomial Heaps?",
    answer: `Binomial heaps are a specialized type of tree-based data structure designed for efficient merging operations. They are less commonly used than basic heaps (min-heaps and max-heaps) but find applications in more advanced algorithms where frequent merging is needed.

    // Merging Two Binomial Heaps
    struct Node* mergeBinomialHeaps(struct Node* h1, struct Node* h2) {
      struct Node* h = NULL;
      struct Node* temp = NULL;
      struct Node* x = h1;
      struct Node* y = h2;
    
      while (x != NULL && y != NULL) {
        if (x->degree <= y->degree) {
          temp = x;
          x = x->sibling;
        } else {
          temp = y;
          y = y->sibling;
        }
    
        temp->sibling = h;
        h = temp;
      }
    
      while (x != NULL) {
        temp = x;
        x = x->sibling;
        temp->sibling = h;
        h = temp;
      }
    
      while (y != NULL) {
        temp = y;
        y = y->sibling;
        temp->sibling = h;
        h = temp;
      }
    
      return h;
    }
    `
  },
  {
    question: "Properties of Binomial Heaps",
    answer: `Properties of Binomial Heaps:
    
    - A Binomial Heap of order k has 2^k nodes.
    - A Binomial Heap of order k has kCj nodes at depth j.
    - The number of nodes in a Binomial Heap of order k is 2^k.
    - The height of a Binomial Heap of order k is k.
    `
  }
];

export default function Page() {
  return (
    <section className="grid place-items-center p-1 lg:p-16 text-white">
      <h1 className={" text-2xl lg:text-6xl text-center p-8"}>Code</h1>
      <div className="grid grid-cols-1 gap-2">
        <div className="grid grid-cols-1 gap-2">
          <h2 className={" text-xl lg:text-4xl text-center p-4 bg-slate-600"}>
            Insertion in Circular Linked Lists
          </h2>
          <ContentDisplay content={insert_circle} />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className={" text-xl lg:text-4xl text-center p-4 bg-slate-600"}>
            Deletion in Circular Linked Lists
          </h2>
          <ContentDisplay content={delete_circle} />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className={" text-xl lg:text-4xl text-center p-4 bg-slate-600"}>
            Traversal of Circular Linked lists
          </h2>
          <ContentDisplay content={traversal_article} />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className={" text-xl lg:text-3xl text-center p-4 bg-slate-600"}>
            Insertion in Doubly Circular Linked Lists
          </h2>
          <ContentDisplay content={insert_double_linked_list} />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className={" text-xl lg:text-3xl text-center p-4 bg-slate-600"}>
            Deletion in Doubly Circular Linked Lists
          </h2>
          <ContentDisplay content={delete_double_linked_list} />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <h2 className={" text-xl lg:text-3xl text-center p-4 bg-slate-600"}>
            Traversal of Doubly Circular Linked lists
          </h2>
          <ContentDisplay content={traversal_double_linked_list} />
        </div>
      </div>
      <div className="h-full py-8">
        <div className="w-full h-full grid grid-cols-1 gap-2">
          {faqs.map((faq, index) => {
            return (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}
