import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
// import PieChart from 'react-native-pie-chart';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

export default function Cake(props) {
  // const [show, setshow] = useState(true);

  // useEffect(() => {
  //   const interval = (setInterval =
  //     (() => {
  //       setshow(show => !show);
  //     },
  //     500));
  //   return () => clearInterval(interval);
  // }, []);

  // const widthAndHeight = 250;
  // const series = [100, 321, 123, 789, 537];
  // const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];

  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  return (
    // <SafeAreaView>
    //   <View>
    //     <Text
    //       style={{
    //         display: show ? 'none' : 'flex',
    //       }}>
    //       hhhhhl
    //     </Text>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          style={{alignSelf: 'center'}}
        />
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.45}
          coverFill={'#FFF'}
        /> */}

          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 20,
            }}>
            piechart
          </Text>
          <PieChart
            style={{
              // justifyContent: 'center',
              position: 'relative',
              left: 20,
            }}
            data={data}
            width={'350'}
            height={'200'}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'black'}
            paddingLeft={''}
            // center={[50, 50]}
            absolute
          />

          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 20,
            }}>
            Bezier Line Chart
          </Text>
          <LineChart
            style={{
              // justifyContent: 'center',
              position: 'relative',
              left: 20,
            }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={350} // from react-native
            height={320}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
          />
          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 20,
            }}>
            Linechart
          </Text>

          <LineChart
            style={{
              // justifyContent: 'center',
              position: 'relative',
              left: 20,
            }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                  strokeWidth: 2, // optional
                },
              ],
              legend: ['Rainy Days'], // optional
            }}
            width={350}
            height={220}
            chartConfig={chartConfig}
          />
          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 20,
            }}>
            ProgressChart
          </Text>

          <ProgressChart
            style={{
              // justifyContent: 'center',
              position: 'relative',
              left: 20,
            }}
            data={{
              labels: ['Swim', 'Bike', 'Run'], // optional
              data: [0.4, 0.6, 0.8],
            }}
            width={350}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 20,
            }}>
            BarChart
          </Text>
          <BarChart
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 10,
            }}
            // style={graphStyle}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={350}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />

          <Text
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 20,
            }}>
            StackedBarChart
          </Text>
          <StackedBarChart
            style={{
              fontSize: 35,
              alignSelf: 'center',
              margin: 10,
            }}
            data={{
              labels: ['Test1', 'Test2'],
              legend: ['L1', 'L2', 'L3'],
              data: [
                [60, 60, 60],
                [30, 30, 60],
              ],
              barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
            }}
            width={350}
            height={220}
            chartConfig={{
              backgroundGradientFrom: '#1E2923',
              backgroundGradientFromOpacity: 1,
              backgroundGradientTo: '#08130D',
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
