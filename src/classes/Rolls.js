import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Modal } from "react-native";

// import FastImage from 'react-native-fast-image'
import CalendarPicker from 'react-native-calendar-picker';
import { Calendar } from "react-native-calendars";
import CardView from 'react-native-cardview'
import DateTimePicker from '@react-native-community/datetimepicker';




export default function Rolls(props) {

    const [show, setShow] = useState(false)
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };

    return (
        <SafeAreaView>
            <View>
                <Calendar
                    onPress={() => setShow(false)}
                    // minDate={new Date()}

                    style={{
                        borderColor: "black",
                        borderRadius: 5,
                        borderWidth: 1,

                        marginTop: 50,
                        marginHorizontal: 20

                        , shadowColor: "gray",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                        shadowOffset: { width: 5, height: 5 },
                        elevation:1

                    }}
                />

                {console.log(new Date())}



    <View>
               <CalendarPicker
                    startFromMonday={true}
                    date={new Date()}
                    allowRangeSelection={true}
                    minDate={new Date(2018, 1, 1)}
                    maxDate={new Date(2050, 6, 3)}
                    weekdays={
                        [
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thur',
                            'Fri',
                            'Sat',
                            'Sun'
                        ]}
                    months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    previousTitle="Previous"
                    nextTitle="Next"
                    todayBackgroundColor="black"
                    selectedDayColor="#66ff33"
                    selectedDayTextColor="#000000"
                    scaleFactor={375}
                    textStyle={{
                        fontFamily: 'Cochin',
                        color: '#000000',
                    }}
                    onDateChange={onDateChange}
                />

                <View style={{ marginTop: 50, }}>
                    <Text style={{ marginTop: 10, }}>
                        Selected Start Date :
                    </Text>
                    <Text style={{ marginTop: 10, }}>
                        {selectedStartDate ? selectedStartDate.toString() : ''}
                    </Text>
                    <Text style={{ marginTop: 10, }}>
                        Selected End Date :
                    </Text>
                    <Text style={{ marginTop: 10, }}>
                        {selectedEndDate ? selectedEndDate.toString() : ''}
                    </Text>
                </View>


            </View>


            </View>
        </SafeAreaView>
        // <SafeAreaView>

        //     <View>
        //         <CalendarPicker
        //             startFromMonday={true}
        //             date={new Date()}
        //             allowRangeSelection={true}
        //             minDate={new Date(2018, 1, 1)}
        //             maxDate={new Date(2050, 6, 3)}
        //             weekdays={
        //                 [
        //                     'Mon',
        //                     'Tue',
        //                     'Wed',
        //                     'Thur',
        //                     'Fri',
        //                     'Sat',
        //                     'Sun'
        //                 ]}
        //             months={[
        //                 'January',
        //                 'Febraury',
        //                 'March',
        //                 'April',
        //                 'May',
        //                 'June',
        //                 'July',
        //                 'August',
        //                 'September',
        //                 'October',
        //                 'November',
        //                 'December',
        //             ]}
        //             previousTitle="Previous"
        //             nextTitle="Next"
        //             todayBackgroundColor="black"
        //             selectedDayColor="#66ff33"
        //             selectedDayTextColor="#000000"
        //             scaleFactor={375}
        //             textStyle={{
        //                 fontFamily: 'Cochin',
        //                 color: '#000000',
        //             }}
        //             onDateChange={onDateChange}
        //         />

        //         <View style={{ marginTop: 50, }}>
        //             <Text style={{ marginTop: 10, }}>
        //                 Selected Start Date :
        //             </Text>
        //             <Text style={{ marginTop: 10, }}>
        //                 {selectedStartDate ? selectedStartDate.toString() : ''}
        //             </Text>
        //             <Text style={{ marginTop: 10, }}>
        //                 Selected End Date :
        //             </Text>
        //             <Text style={{ marginTop: 10, }}>
        //                 {selectedEndDate ? selectedEndDate.toString() : ''}
        //             </Text>
        //         </View>


        //     </View>

           
        // </SafeAreaView>
    )
}