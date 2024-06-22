document.addEventListener('DOMContentLoaded', function() {
    const students = [
        { name: 'Rahul', marks: 95, class: '10A', address: 'Arwal, Patna' },
        { name: 'Anjali', marks: 78, class: '10B', address: '456 Elm St, Gujrat' },
        { name: 'Sonam', marks: 92, class: '10A', address: '789 Oak St, Mahrastra' },
        { name: 'Prince', marks: 88, class: '10C', address: 'Patna, Bihar' },
        { name: 'Anand', marks: 88, class: '10C', address: '321 Pine St, Odisha' },
        { name: 'Pallavi', marks: 88, class: '10C', address: '87 A7 Colony, GOnda' },
        { name: 'Prashant', marks: 88, class: '10C', address: 'Gandhi Chauk, Rajsthan' },
        { name: 'Gyan', marks: 88, class: '10C', address: 'Modi ji ke adde, J&K' },
        { name: 'Ritik', marks: 88, class: '10C', address: 'Yogi baba ke adde, Nepal' },
        { name: 'Vivek', marks: 88, class: '10C', address: 'Gandhi Chauk, Rajsthan' },
        { name: 'Mayank', marks: 88, class: '10C', address: 'Modi ji ke adde, J&K' },
        { name: 'Rohit', marks: 88, class: '10C', address: 'Nitish chacha ke adde, Bihar' },
        { name: 'Yashwant', marks: 88, class: '10C', address: 'Gandhi Chauk, Rajsthan' },
        { name: 'Jitendra', marks: 88, class: '10C', address: 'Modi ji ke adde, J&K' },
        { name: 'Somya', marks: 88, class: '10C', address: 'Yogi baba ke adde, Nepal' },
        { name: 'Ragini', marks: 88, class: '10C', address: 'Yogi baba ke adde, Uttar Pradesh' }
        // Add more students as needed
    ];

    const studentCardsContainer = document.getElementById('studentCards');
    const searchInput = document.getElementById('searchInput');

    // Function to display all students initially
    function displayStudents(studentsList) {
        studentCardsContainer.innerHTML = '';
        studentsList.forEach(student => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${student.name}</h2>
                <p><strong>Marks:</strong> ${student.marks}</p>
                <p><strong>Class:</strong> ${student.class}</p>
                <p><strong>Address:</strong> ${student.address}</p>
            `;
            studentCardsContainer.appendChild(card);
        });
    }

    // Initial display of all students
    displayStudents(students);

    // Event listener for search input
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredStudents = students.filter(student => 
            student.name.toLowerCase().includes(searchTerm)
        );
        displayStudents(filteredStudents);
    });
});
