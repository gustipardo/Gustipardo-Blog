import { LabelList, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

type PieChartComponentProps = {
    title: string
    description: string
    chartData: Array<{ [key: string]: any }>
    chartConfig: ChartConfig
    dataKey: string
    nameKey: string
    footerText?: string
}

export const PieChartComponent: React.FC<PieChartComponentProps> = ({
    title,
    description,
    chartData,
    chartConfig,
    dataKey,
    nameKey,
    footerText = "Showing total visitors for the last 6 months",
}) => {
    return (
        <Card className="flex flex-col mb-4">
            <CardHeader className="items-center pb-0">
                <CardTitle className="m-0">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[350px]"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey={nameKey} hideLabel />}
                        />
                        <Pie data={chartData} dataKey={dataKey}>
                            <LabelList
                                dataKey={nameKey}
                                className="fill-background text-black"
                                stroke="none"
                                fontSize={16}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label || value
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col text-sm">
                <div className="leading-none text-muted-foreground">{footerText}</div>
            </CardFooter>
        </Card>
    )
}
