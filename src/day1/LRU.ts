type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

function createNode<V>(value: V){
    return{value} as Node<V>
}


export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: new Map<K,Node<V>>();
    private reverselookup: new Map<Node<V>, K>();


    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined; 
        this.lookup = new Map<K, Node<V>>();
    }

    update(key: K, value: V): void {

}
    get(key: K): V | undefined {

}
}