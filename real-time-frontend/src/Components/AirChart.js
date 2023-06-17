import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const AirChart = (props) => {

    var data = {
        labels: props.airData?.time,
        datasets: [
        {
          label: `Carbon Monoxide`,
          data: props.airData?.carbon_monoxide,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1
        },
        {
            label: `Ozone`,
            data: props.airData?.ozone,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
          },
          {
            label: `PM10`,
            data: props.airData?.pm10,
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
          },
    
    ]
      };

    var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }


    return (
      <div>
         <Line
            data={data}
            height={400}
            options={options}
        />
      </div>
    )
  }
  
  export default AirChart