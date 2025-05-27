import java.util.*;

class Kruskal {

    // Disjoint Set (Union-Find) data structure
    static class DisjointSet {
        private int[] parent, rank;

        // Constructor
        public DisjointSet(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                rank[i] = 0;
            }
        }

        // Find operation with path compression
        public int find(int u) {
            if (parent[u] != u) {
                parent[u] = find(parent[u]); // Path compression
            }
            return parent[u];
        }

        // Union operation with union by rank
        public void union(int u, int v) {
            int rootU = find(u);
            int rootV = find(v);

            if (rootU != rootV) {
                if (rank[rootU] > rank[rootV]) {
                    parent[rootV] = rootU;
                } else if (rank[rootU] < rank[rootV]) {
                    parent[rootU] = rootV;
                } else {
                    parent[rootV] = rootU;
                    rank[rootU]++;
                }
            }
        }
    }

    // Edge class to represent an edge in the graph
    static class Edge implements Comparable<Edge> {
        int u, v, weight;

        // Constructor
        public Edge(int u, int v, int weight) {
            this.u = u;
            this.v = v;
            this.weight = weight;
        }

        // Comparing edges by weight for sorting
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }

    // Kruskal's algorithm to find the Minimum Spanning Tree
    public static List<Edge> kruskal(int n, List<Edge> edges) {
        Collections.sort(edges);  // Sort edges by weight
        DisjointSet ds = new DisjointSet(n);
        List<Edge> mst = new ArrayList<>();
        
        // Process each edge
        for (Edge edge : edges) {
            int u = edge.u;
            int v = edge.v;

            // If u and v are not in the same set, add the edge to MST
            if (ds.find(u) != ds.find(v)) {
                ds.union(u, v);
                mst.add(edge);
            }
        }

        return mst;
    }

    // Example usage of Kruskal's algorithm
    public static void main(String[] args) {
        int n = 4;  // Number of vertices
        List<Edge> edges = new ArrayList<>();
        
        // Adding edges to the graph (u, v, weight)
        edges.add(new Edge(0, 1, 10));
        edges.add(new Edge(0, 2, 6));
        edges.add(new Edge(0, 3, 5));
        edges.add(new Edge(1, 3, 15));
        edges.add(new Edge(2, 3, 4));
        
        // Run Kruskal's algorithm to get the MST
        List<Edge> mst = kruskal(n, edges);
        
        // Print the edges in the MST
        System.out.println("Minimum Spanning Tree:");
        int mstWeight = 0;
        for (Edge edge : mst) {
            System.out.println("Edge (" + edge.u + ", " + edge.v + ") with weight " + edge.weight);
            mstWeight += edge.weight;
        }

        System.out.println("Weight of the MST: " + mstWeight);
    }
}
