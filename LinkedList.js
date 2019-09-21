function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){

    this.insert = function (head, data) {
        if (!head) {
            head = new Node(data);
        } else {
            let node = head;
            while (node.next) node = node.next;
            node.next = new Node(data);
        }
        return head;
    };

    this.display=function(head){
        var start=head;
        while(start){
            process.stdout.write(start.data+" ");
            start=start.next;
        }
    };
}
function main(){
    var head=null;
    var mylist=new Solution();
    var data= [0, 1, 2, 3, 4];
    for(i=0;i<5;i++){
        head=mylist.insert(head,data[i]);
    }
    mylist.display(head);
}

main();