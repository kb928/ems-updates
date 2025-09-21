(function() {
    function applyPatch() {
        const inServiceSelect = document.getElementById("inServiceSelect");
        const oosSelect = document.getElementById("oosSelect");
        
        if (inServiceSelect) {
            inServiceSelect.removeAttribute("onchange");
            inServiceSelect.addEventListener("change", function() {
                if (this.value) {
                    addInServiceUnit(this.value);
                    this.value = "";
                }
            });
        }
        
        if (oosSelect) {
            oosSelect.removeAttribute("onchange");
            oosSelect.addEventListener("change", function() {
                if (this.value) {
                    addOOSUnit(this.value);
                    this.value = "";
                }
            });
        }
    }
    
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", applyPatch);
    } else {
        applyPatch();
    }
})();
