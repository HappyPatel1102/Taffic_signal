import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../utils/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'



class HomeScreen extends Component<{ navigation: any }> {

    constructor(props: any) {
        super(props)
        this.state = {
            bgA: 'white',
            bgB: 'white',
            bgC: 'white',
            bgD: 'white',
            initialstate: 'A',
            timerA: 5,

            timerForAMB: 10

        }
    }


    starttime = () => {

        this.a = setInterval(() => {
            this.setState((prevState) => ({ timerA: prevState.timerA - 1 }))
            this.changeamb()
        }, 1000)

    }


    changeamb = () => {

        const { initialstate, timerA }: any = this.state
        let time = timerA <= 0 && 'next'

        switch (initialstate) {
            case "A":
                this.setState({
                    bgA: 'lightgreen',
                    bgB: 'white',
                    bgC: 'white',
                    bgD: 'white',
                    initialstate: time == 'next' ? 'B' : 'A',
                    timerA: time == 'next' ? 5 : timerA,
                })
                time == 'next' && this.starttime()

                break;
            case 'B':
                this.setState({
                    bgA: 'white',
                    bgB: 'lightgreen',
                    bgC: 'white',
                    bgD: 'white',
                    initialstate: time == 'next' ? 'C' : 'B',
                    timerA: time == 'next' ? 5 : timerA
                })
                time == 'next' && this.starttime()
                break;
            case 'C':
                this.setState({
                    bgA: 'white',
                    bgB: 'white',
                    bgC: 'lightgreen',
                    bgD: 'white',
                    initialstate: time == 'next' ? 'D' : 'C',
                    timerA: time == 'next' ? 5 : timerA
                })
                time == 'next' && this.starttime()
                break;
            case 'D':
                this.setState({
                    bgA: 'white',
                    bgB: 'white',
                    bgC: 'white',
                    bgD: 'lightgreen',
                    initialstate: time == 'next' ? 'A' : 'D',
                    timerA: time == 'next' ? 5 : timerA
                })
                time == 'next' && this.starttime()
                break;
        }
    }

    componentDidUpdate() {
        const { timerA }: any = this.state
        if (timerA == 0) {
            clearInterval(this.a)

        }
    }
    componentWillUnmount() {
        clearInterval(this.a)
    }
    render() {
        const { timerA, initialstate, bgA, bgB, bgC, bgD }: any = this.state
        return (

            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headerView}>
                    <Text style={styles.mainTitle}>{'Traffic Signal'}</Text>
                    <Icon name={'settings'} size={30} color={'#000'} />
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.marginContent}>

                        <View style={styles.centerElements}>
                            <TouchableOpacity
                                onPress={() => this.starttime()}
                                style={[styles.boxContainer, styles.centerElements]}>
                                <Text>{'AMB'}</Text>
                            </TouchableOpacity>

                            <View style={[styles.boxContainer, styles.centerElements, styles.marginTop, { backgroundColor: bgA }]}>
                                <Text>{'A'}</Text>
                            </View>

                            <View style={[styles.marginTop, styles.centerElements]}>
                                {initialstate == 'A' &&
                                    <Text>{timerA}</Text>

                                }
                            </View>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', display: 'flex' }]}>

                            <View style={styles.row}>
                                <View style={[styles.boxContainer, styles.centerElements,]}>
                                    <Text>{'AMB'}</Text>
                                </View>

                                <View style={[styles.boxContainer, styles.centerElements, { marginLeft: 10, backgroundColor: bgD }]}>
                                    <Text>{'D'}</Text>
                                </View>

                                <View style={[styles.centerElements, { marginLeft: 10 }]}>
                                    {
                                        initialstate == 'D' &&
                                        <Text>{timerA}</Text>
                                    }
                                </View>
                            </View>
                            <View style={styles.row}>

                                <View style={[styles.centerElements]}>
                                    {
                                        initialstate == 'B' ?
                                            <Text>{timerA}</Text>
                                            : null
                                    }
                                </View>
                                <View style={[styles.boxContainer, styles.centerElements, { marginLeft: 10, backgroundColor: bgB }]}>
                                    <Text>{'B'}</Text>
                                </View>
                                <View style={[styles.boxContainer, styles.centerElements, { marginLeft: 10, }]}>
                                    <Text>{'AMB'}</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.centerElements}>
                            <View style={[styles.centerElements]}>
                                {
                                    initialstate == 'C' &&
                                    <Text>{timerA}</Text>
                                }
                            </View>

                            <View style={[styles.boxContainer, styles.centerElements, styles.marginTop, { backgroundColor: bgC }]}>
                                <Text>{'C'}</Text>
                            </View>

                            <View style={[styles.boxContainer, styles.centerElements, styles.marginTop,]}>
                                <Text>{'AMB'}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}

export default HomeScreen