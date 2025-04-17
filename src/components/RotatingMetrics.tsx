
import { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

interface MetricData {
  title: string;
  data: { value: number }[];
}

const generateDummyData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    value: Math.floor(Math.random() * 100),
  }));
};

const metrics: MetricData[] = [
  { title: 'Sales Growth', data: generateDummyData() },
  { title: 'User Engagement', data: generateDummyData() },
  { title: 'Revenue', data: generateDummyData() },
  { title: 'Monthly Active Users', data: generateDummyData() },
  { title: 'Conversion Rate', data: generateDummyData() },
];

export const RotatingMetrics = () => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % metrics.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 sm:h-28 md:h-32 p-3 md:p-4 neuro rounded-lg">
      <h3 className="text-xs md:text-sm font-medium mb-1 md:mb-2">{metrics[currentMetricIndex].title}</h3>
      <div className="h-[calc(100%-24px)] md:h-[calc(100%-28px)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metrics[currentMetricIndex].data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8A7FC8"
              strokeWidth={1.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RotatingMetrics;
