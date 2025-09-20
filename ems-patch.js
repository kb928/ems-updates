// EMS Report System Patch v2.1
// Fixes unit selection dropdowns
(function() {
    console.log('Applying EMS Report Patch v2.1...');
    
    function applyPatch() {
        // Fix for unit select dropdowns
        const inServiceSelect = document.getElementById('inServiceSelect');
        const oosSelect = document.getElementById('oosSelect');
        
        if (inServiceSelect) {
            inServiceSelect.removeAttribute('onchange');
            inServiceSelect.addEventListener('change', function() {
                if (this.value) {
                    addInServiceUnit(this.value);
                    this.value = '';
                }
            });
        }
        
        if (oosSelect) {
            oosSelect.removeAttribute('onchange');
            oosSelect.addEventListener('change', function() {
                if (this.value) {
                    addOOSUnit(this.value);
                    this.value = '';
                }
            });
        }
        
        console.log('✅ Patch v2.1 applied successfully');
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyPatch);
    } else {
        applyPatch();
    }
})();
