// script.js

document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-btn');
  
    searchButton.addEventListener('click', function() {
      // Get the search input value
      var searchTerm = prompt('Enter your search term:');
  
      // Replace this with your actual search functionality or redirect logic
      if (searchTerm) {
        alert('Performing search for: ' + searchTerm);
        // Implement your search logic here using the searchTerm
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
  
    // Toggle the dropdown content when the button is clicked
    dropdownButton.addEventListener('click', function () {
      dropdownContent.classList.toggle('show');
    });
  
    // Close the dropdown content if the user clicks outside of it
    window.addEventListener('click', function (event) {
      if (!event.target.matches('.dropdown-btn')) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      }
    });
  });
  




  

  document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('stackedBarChart').getContext('2d');

    const data = {
        labels: [20, '', 25, '', 30, '', 35, '', 40, '', 60, '', 65, ''],
        datasets: [
            {
                label: 'Employer: K73500',
                data: [73500, 0, 73500, 0, 73500, 0, 73500, 0, 73500, 0, 73500, 0, 73500],
                backgroundColor: '#3498db',
            },
            {
                label: 'Employee: K52500',
                data: [52500, 0, 52500, 0, 52500, 0, 52500, 0, 52500, 0, 52500, 0, 52500],
                backgroundColor: '#2ecc71',
            },
            {
                label: 'Total Interest: K244313',
                data: [244313, 0, 244313, 0, 244313, 0, 244313, 0, 244313, 0, 244313, 0, 244313],
                backgroundColor: '#e74c3c',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'X-axis Values',
                },
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Y-axis Values',
                },
                ticks: {
                    callback: function (value, index, values) {
                        return '$' + value;
                    }
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    const stackedBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});


function toggleOptions(className) {
  var options = document.querySelector('.' + className);
  options.style.display = options.style.display === 'none' ? 'block' : 'none';
}

function selectOption(event, buttonId) {
  event.preventDefault(); // Prevent the default behavior (e.g., following the href)
  var selectedOption = event.target.textContent.trim();
  var button = document.getElementById(buttonId);
  button.textContent = selectedOption;
  // Optionally, you can hide the options after selecting one
  var options = document.querySelector('.' + buttonId.replace('Button', 'Options'));
  options.style.display = 'none';
}

  
  
function updatePercentage() {
  var rangeValue = document.getElementById('customRange1').value;
  document.getElementById('percentageLabel').innerText = rangeValue + '%';
}
function updateLabel() {
  var rangeValue = document.getElementById('customRange2').value;
  document.getElementById('ageLabel').innerText = rangeValue;
}

function updateDisplay() {
  var employeeContribution = document.getElementById('employeeContribution').value;
  var interestRate = document.getElementById('interestRate').value;

  var displayText = employeeContribution + '% Employee Contribution, ' + interestRate + '% Interest Rate';
  alert(displayText); // You can replace this with any display logic you need
}


