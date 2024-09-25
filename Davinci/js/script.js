


// Function to show the selected tab
    function showTab(event, tabId) {
      event.preventDefault();

      // Remove active class from all tabs and contents
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      event.target.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }

    // Function to show popup
    function showPopup() {
      document.getElementById('popupOverlay').style.display = 'flex'; // Show popup
    }

    // Function to hide popup
    function hidePopup() {
      document.getElementById('popupOverlay').style.display = 'none'; // Hide popup
    }

    // Close popup if clicking outside the popup content
    function closePopup(event) {
      if (event.target === document.getElementById('popupOverlay')) {
        hidePopup();
      }
    }
