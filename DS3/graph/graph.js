class Graph {
    constructor() {
        this.adjacencyList = []
    }

    addVerstex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVerstex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVerstex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)

    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjVert of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjVert)
        }
        delete this.adjacencyList[vertex]
    }
    /// time complexity depends on the number adj verteices



    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "-->", [...this.adjacencyList[vertex]]);

        }
    }
}

const graph = new Graph()
graph.addVerstex('A')
graph.addVerstex('B')
graph.addVerstex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.display()
graph.removeEdge('A', 'B')
graph.display()
graph.removeVertex('B')
graph.display()
console.log(graph.hasEdge('A', 'B'))