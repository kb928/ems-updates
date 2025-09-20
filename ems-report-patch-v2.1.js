// EMS Report System Patch v2.1
// Fixes unit selection dropdowns not populating fields
// Author: [Your Name]
// Date: 2025-01-20

(function() {
    console.log('Applying EMS Report Patch v2.1...');
    
    // Wait for DOM to be ready
    function applyPatch() {
        // Fix for unit select dropdowns
        const inServiceSelect = document.getElementById('inServiceSelect');
        const oosSelect = document.getElementById('oosSelect');
        
        if (inServiceSelect) {
            // Remove the inline onchange attribute
            inServiceSelect.removeAttribute('onchange');
            
            // Add proper event listener
            inServiceSelect.addEventListener('change', function() {
                if (this.value) {
                    addInServiceUnit(this.value);
                    this.value = ''; // Reset after adding
                }
            });
            console.log('✓ In-Service unit selector patched');
        }
        
        if (oosSelect) {
            // Remove the inline onchange attribute
            oosSelect.removeAttribute('onchange');
            
            // Add proper event listener
            oosSelect.addEventListener('change', function() {
                if (this.value) {
                    addOOSUnit(this.value);
                    this.value = ''; // Reset after adding
                }
            });
            console.log('✓ OOS unit selector patched');
        }
        
        // Update version indicator
        const versionButton = document.querySelector('.lock-button[onclick="checkPatchStatus()"]');
        if (versionButton) {
            versionButton.textContent = '📊 v2.1';
            console.log('✓ Version updated to 2.1');
        }
        
        console.log('✅ Patch v2.1 applied successfully');
    }
    
    // Apply patch when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyPatch);
    } else {
        applyPatch();
    }
})();
