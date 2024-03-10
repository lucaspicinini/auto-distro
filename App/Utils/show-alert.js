function setShowAlert(placeholder, message, color, dismissible) {
    const wrapper = document.createElement("div");
    const dismissibleCheck = dismissible;

    if(dismissibleCheck) {
        wrapper.innerHTML = `
        <div class="alert alert-${color} alert-dismissible" role="alert">
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    }else {
        wrapper.innerHTML = `
        <div class="alert alert-${color}" role="alert">
            <div>${message}</div>
        </div>
        `;
    }

    document.getElementById(placeholder).innerHTML = wrapper.innerHTML;
}

export const showAlert = setShowAlert;
