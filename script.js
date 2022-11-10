const groups = document.getElementsByClassName("card-group");
let activeIndex = 0;

const handleLoveClick = () => {
  const nextIndex = (activeIndex + 1) % 3;
  console.log(nextIndex);
  const currentGroup = document.querySelector(`[data-index ="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  console.log(nextIndex);

  // Active group becomes after
  currentGroup.dataset.status = "after";
  // Next group becomes active
  nextGroup.dataset.status = "becoming-active-from-before";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
  console.log(nextIndex);
  console.log(groups.length);
  //
};

const handleHateClick = () => {
  const nextIndex = activeIndex -1 >= 0 ? activeIndex -1 : groups.length - 1;
  console.log(nextIndex);
  const currentGroup = document.querySelector(`[data-index ="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  console.log(nextIndex);
  // Active group becomes before
  currentGroup.dataset.status = "before";
  // Next group becomes active
  nextGroup.dataset.status = "becoming-active-from-after";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
  console.log(nextIndex);
  //
};
