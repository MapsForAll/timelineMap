export function createResetZoomControl(map: google.maps.Map, cb: Function): void {
    const controlDiv = document.createElement('div');

    // https://developers.google.com/maps/documentation/javascript/controls
    // Set CSS for the control border.
    const controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginLeft = '10px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Reset Zoom';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    const controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Reset Zoom';
    controlUI.appendChild(controlText);

    controlUI.addEventListener('click', () => cb());

    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(controlDiv);
}

export function createNoMarkersControl(map: google.maps.Map): void {
    if (map.controls[google.maps.ControlPosition.BOTTOM_CENTER].getLength() === 0) {
        const controlDiv = document.createElement('div');

        // Set CSS for the control border.
        const controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'No markers found in your selected date range';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        const controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'No markers found in your selected date range';
        controlUI.appendChild(controlText);

        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(controlDiv);
    }
}

export function clearNoMarkersControl(map: google.maps.Map): void {
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear();
}
