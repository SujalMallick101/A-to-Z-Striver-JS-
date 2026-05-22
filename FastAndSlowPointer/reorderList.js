function reorderList(head) {
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let prev=null;
    while(slow!==null){
        let next=slow.next;
        slow.next=prev;
        prev=slow;
        slow=next;
    }
    let first=head;
    let second=prev;
    while(second.next!==null){
        let temp1=first.next;
        let temp2=second.next;
        first.next=second;
        second.next=temp1;
        first=temp1;
        second=temp2;
    }
}

