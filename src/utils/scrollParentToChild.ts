function scrollParentToChild(parent: HTMLElement, child: HTMLElement) {
    // Where is the parent on page
    const parentRect = parent.getBoundingClientRect();
    // What can you see?
    const parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth,
    };

    // Where is the child
    const childRect = child.getBoundingClientRect();
    // Is the child viewable?
    const isViewable =
        childRect.top >= parentRect.top &&
        childRect.top <= parentRect.top + parentViewableArea.height;

    // if you can't see the child try to scroll parent
    if (!isViewable) {
        // scroll by offset relative to parent
        parent.scrollTo({
            top: childRect.top + parent.scrollTop - parentRect.top,
            behavior: "smooth",
        });
    }
}

export default scrollParentToChild;