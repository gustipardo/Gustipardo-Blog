import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface CaruselComponentProps {
    folderPath: string;
    imageNames: string[];
    aspectRatio?: "square" | "vertical" | "horizontal";
}

export const CaruselComponent: React.FC<CaruselComponentProps> = ({
    folderPath,
    imageNames,
    aspectRatio = "square", // Valor por defecto
}) => {
    // Clases para controlar el aspect ratio
    const aspectClasses = {
        square: "aspect-square", // 1:1
        vertical: "aspect-[3/4]", // 3:4
        horizontal: "aspect-[4/3]", // 4:3
    };

    return (
        <Carousel className="w-10/12 md:w-100 mx-auto">
            <CarouselContent>
                {imageNames.map((imageName, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent
                                    className={`flex ${aspectClasses[aspectRatio]} items-center justify-center p-6`}
                                >
                                    <img
                                        src={`${folderPath}/${imageName}`}
                                        alt={`Image ${index + 1}`}
                                        className="object-cover m-0 w-full h-full"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
