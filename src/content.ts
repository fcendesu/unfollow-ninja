const DEBUG_PREFIX = '[Unfollow Ninja]';

function uncheckFollowCompany() {
  const checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
  
  if (checkboxes.length > 0) {
    console.debug(`${DEBUG_PREFIX} Found ${checkboxes.length} checkboxes on page.`);
  }

  checkboxes.forEach((checkbox) => {
    // Check if the checkbox is checked
    if (!checkbox.checked) return;

    // Look for labels associated with this checkbox
    const label = document.querySelector(`label[for="${checkbox.id}"]`) || checkbox.closest('label');
    const labelText = label?.textContent?.trim().toLowerCase() || '';
    
    if (labelText) {
      console.debug(`${DEBUG_PREFIX} Checking checkbox with label: "${labelText}"`);
    }

    // Broadened detection logic
    const isFollowCheckbox = 
      labelText.includes('follow') && (
        labelText.includes('company') || 
        labelText.includes('organization') || 
        labelText.includes('to stay up to date') || // Common LinkedIn pattern
        labelText.includes('keep up with')
      );

    if (isFollowCheckbox) {
      console.log(`${DEBUG_PREFIX} Target checkbox found! Unchecking...`);
      checkbox.click();
      
      // Double check and try a different method if click() didn't work
      setTimeout(() => {
        if (checkbox.checked) {
          console.warn(`${DEBUG_PREFIX} Click failed to uncheck. Forcing value...`);
          checkbox.checked = false;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 100);
    }
  });
}

console.log(`${DEBUG_PREFIX} Content script loaded and observing...`);

// Observe DOM changes to catch the modal when it appears
const observer = new MutationObserver((mutations) => {
  let shouldCheck = false;
  for (const mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      shouldCheck = true;
      break;
    }
  }
  if (shouldCheck) {
    uncheckFollowCompany();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Initial run
uncheckFollowCompany();
