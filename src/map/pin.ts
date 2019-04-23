export interface Dimensions {
    height: number;
    width: number;
}
function getImageDimensions(imgUrl: string): Promise<Dimensions> {
    return new Promise(resolve => {
        let img = new Image();
        img.src = imgUrl;
        img.onload = () => resolve({height: img.height, width: img.width});
    });
}

export function getDimensions(dimensions: Dimensions): Dimensions {
    if (dimensions.height > 32 || dimensions.width > 32) {
        let height = dimensions.height * (32.0 / dimensions.width);
        let width = 32;

        return {height, width};
    }

    return dimensions;
}

export async function createPin(pin: string): Promise<google.maps.Icon> {
    let dimensions = getDimensions(await getImageDimensions(pin));

    return {
        url: pin,
        anchor: new google.maps.Point(dimensions.width / 2, dimensions.height),
        scaledSize: new google.maps.Size(dimensions.width, dimensions.height)
    };
}
