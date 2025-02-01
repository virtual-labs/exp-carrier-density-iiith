document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".v-collapsible");

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", () => {
            const content = collapsible.nextElementSibling;
            collapsible.classList.toggle("is-active");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    const rightItems = document.querySelectorAll(".right-column li");
    const leftImages = document.querySelectorAll(".left-column img");
    const svg = document.getElementById("lines");
    let selectedLeft = null;
    let selectedRight = null;
    const matches = new Map();

    // Select images as left elements
    leftImages.forEach(img => {
        img.addEventListener("click", () => {
            clearSelections("left");
            selectedLeft = img;
            img.style.border = "2px solid #4caf50"; // Highlight selected image
        });
    });

    // Select right elements (text options)
    rightItems.forEach(item => {
        item.addEventListener("click", () => {
            clearSelections("right");
            item.classList.add("selected");
            selectedRight = item;
            checkMatch();
        });
    });

    function clearSelections(column) {
        if (column === "left") {
            leftImages.forEach(img => img.style.border = "none");
        } else {
            rightItems.forEach(item => item.classList.remove("selected"));
        }
    }

    function checkMatch() {
        if (selectedLeft && selectedRight) {
            const leftId = selectedLeft.dataset.id;
            const rightId = selectedRight.dataset.id;
            matches.set(leftId, rightId); // Store selections as IDs

            drawLine(selectedLeft, selectedRight);
            selectedLeft = null;
            selectedRight = null;
        }
    }

    function drawLine(leftElement, rightElement) {
        const leftRect = leftElement.getBoundingClientRect();
        const rightRect = rightElement.getBoundingClientRect();
        const containerRect = svg.getBoundingClientRect();

        const x1 = leftRect.right - containerRect.left + 5;
        const y1 = leftRect.top + leftRect.height / 2 - containerRect.top;
        const x2 = rightRect.left - containerRect.left - 5;
        const y2 = rightRect.top + rightRect.height / 2 - containerRect.top;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "#4caf50");
        line.setAttribute("stroke-width", "2");

        svg.appendChild(line);
    }

    // Correct answers mapping
    const correctAnswers = {
        "1": "1", // Image 1 -> intrinsic
        "2": "2", // Image 2 -> p-type
        "3": "3"  // Image 3 -> n-type
    };

    // Submit button validation
    document.getElementById("submit").addEventListener("click", () => {
        let score = 0;

        for (const [imageId, textId] of matches) {
            if (correctAnswers[imageId] === textId) {
                score++;
            }
        }

        document.getElementById("result").innerText = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
    });
});