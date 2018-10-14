class Graph {
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v){
        return this.AdjList.set(v, []);

    }

    addEdge(v, w){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
        return this.AdjList;
    }

    printGraph(){
        let keys = this.AdjList.keys();
        for (var i of keys){
            let values = this.AdjList.get(i);
            var conc = ""
            for (var j of values){
                conc += j + " ";
                console.log(i + "->" + conc);
            }
        }
    }
}

const graph = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (var i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');

//graph.printGraph();
console.log(graph.AdjList, "AdjList");