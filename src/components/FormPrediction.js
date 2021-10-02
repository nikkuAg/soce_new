import React, { useState, useEffect } from 'react'
import { MenuHeader } from './Menu'
import './form.css'
import { Form } from 'semantic-ui-react'
import { Footer } from './Footer'
import { useHistory } from 'react-router';

const options = [
    { key: 'IIT', text: 'IIT', value: 'IIT' },
    { key: 'IIIT', text: 'IIIT', value: 'IIIT' },
    { key: 'NIT', text: 'NIT', value: 'NIT' },
    { key: 'GFTI', text: 'GFTI', value: 'GFTI' },
]
const category = [
    { key: 'General', text: 'General', value: 'General' },
    { key: 'General Pwd', text: 'General PwD', value: 'General Pwd' },
    { key: 'GEN-EWS', text: 'General EWS', value: 'GEN-EWS' },
    { key: 'GEN-EWS(PwD)', text: 'General EWS (PwD)', value: 'GEN-EWS(PwD)' },
    { key: 'OBC-NCL', text: 'OBC NCL', value: 'OBC-NCL' },
    { key: 'OBC_NCL(PwD)', text: 'OBC NCL(PwD)', value: 'OBC_NCL(PwD)' },
    { key: 'SC', text: 'SC', value: 'SC' },
    { key: 'SC PwD', text: 'SC PwD', value: 'SC PwD' },
    { key: 'ST', text: 'ST', value: 'ST' },
    { key: 'ST PwD', text: 'ST PwD', value: 'ST PwD' },
]
const pool = [
    { key: 'Gender-Neutral', text: 'Male', value: 'Gender-Neutral' },
    { key: 'Female-Only', text: 'Female', value: 'Female-Only' },

]
const type = [
    { key: 'opening_rank', text: 'Opening Rank', value: 'opening_rank' },
    { key: 'closing_rank', text: 'Closing Rank', value: 'closing_rank' },
]
const year = [
    { key: '2015', text: '2015', value: '2015' },
    { key: '2016', text: '2016', value: '2016' },
    { key: '2017', text: '2017', value: '2017' },
    { key: '2018', text: '2018', value: '2018' },
    { key: '2019', text: '2019', value: '2019' },
    { key: '2020', text: '2020', value: '2020' },
]

export const FormPrediction = () => {
    let insSave = String(sessionStorage.getItem('ins'))
    let poolSave = String(sessionStorage.getItem('pool'))
    let categorySave = String(sessionStorage.getItem('category'))
    let quotaSave = String(sessionStorage.getItem('quota'))
    let rankSave = String(sessionStorage.getItem('rank'))
    let yearSave = String(sessionStorage.getItem('year'))
    let roundSave = String(sessionStorage.getItem('round'))
    let optionSave = String(sessionStorage.getItem('option'))

    const [ins, setins] = useState(insSave === "null" ? null : insSave)
    const [seat_pool, setpool] = useState(poolSave === "null" ? null : poolSave)
    const [categoryValue, setcat] = useState(categorySave === "null" ? null : categorySave)
    const [quotaValue, setq] = useState(quotaSave === "null" ? null : quotaSave)
    const [rank, setr] = useState(rankSave === "null" ? null : rankSave)
    const [yearValue, sety] = useState(yearSave === "null" ? null : yearSave)
    const [roundValue, setrv] = useState(roundSave === "null" ? null : roundSave)
    const [option, seto] = useState(optionSave === "null" ? null : optionSave)

    const [change, setchange] = useState('')

    useEffect(() => {
        insSave = String(sessionStorage.getItem('ins'))
        poolSave = String(sessionStorage.getItem('pool'))
        categorySave = String(sessionStorage.getItem('category'))
        quotaSave = String(sessionStorage.getItem('quota'))
        rankSave = String(sessionStorage.getItem('rank'))
        yearSave = String(sessionStorage.getItem('year'))
        roundSave = String(sessionStorage.getItem('round'))
        optionSave = String(sessionStorage.getItem('option'))

        seto(optionSave === "null" ? null : optionSave)
        setrv(roundSave === "null" ? null : roundSave)
        sety(yearSave === "null" ? null : yearSave)
        setr(rankSave === "null" ? null : rankSave)
        setq(quotaSave === "null" ? null : quotaSave)
        setins(insSave === "null" ? null : insSave)
        setpool(poolSave === "null" ? null : poolSave)
        setcat(categorySave === "null" ? null : categorySave)

    }, [change])

    useEffect(() => {
        sessionStorage.setItem('result', false)
    }, [])

    const history = useHistory()
    const [error, seterror] = useState('')
    const [quota, setquota] = useState([])
    const [placeHolder, setplaceHolder] = useState("")
    const [disable, setdisable] = useState(true)
    const [round, setround] = useState(true)
    const [roundArray, setroundArray] = useState([{ key: '1', text: 'Round 1', value: '1' }])


    const instituteChange = (e, { value }) => {
        if (value === "IIT" || value === "IIIT") {
            setquota([{ key: 'AI', text: 'AI', value: 'AI' }])
        }
        else if (value === "NIT") {
            setquota([{ key: 'HS', text: 'Home State', value: 'HS' }, { key: 'OS', text: 'Other State', value: 'OS' },
            { key: 'AP', text: 'Quota for NIT Warangal', value: 'AP' }, { key: 'GO', text: 'Quota for NIT GOA', value: 'GO' }])
        }
        else if (value === "GFTI") {
            setquota([{ key: 'AI', text: 'AI', value: 'AI' }, { key: 'HS', text: 'Home State', value: 'HS' },
            { key: 'OS', text: 'Other State', value: 'OS' }])
        }
        if (value === "IIT") {
            setplaceHolder("Enter your JEE Advance Rank...")
        } else {
            setplaceHolder("Enter your JEE Mains Rank...")
        }
        setdisable(false)
        sessionStorage.setItem('ins', value)
        setchange('1')

    }
    const roundChange = (e, { value }) => {
        if (value === '2015') {
            setroundArray([{ key: '7', text: 'Round 7', value: '7' },])
        }
        else if (value === '2016') {
            setroundArray([{ key: '1', text: 'Round 1', value: '1' }, { key: '6', text: 'Round 6', value: '6' },])
        }
        else if (value === '2017' || value === '2018' || value === '2019') {
            setroundArray([{ key: '1', text: 'Round 1', value: '1' }, { key: '7', text: 'Round 7', value: '7' },])
        }
        else if (value === '2020') {
            setroundArray([{ key: '1', text: 'Round 1', value: '1' }, { key: '2', text: 'Round 2', value: '2' },
            { key: '3', text: 'Round 3', value: '3' }, { key: '4', text: 'Round 4', value: '4' },
            { key: '5', text: 'Round 5', value: '5' }, { key: '6', text: 'Round 6', value: '6' },
            { key: 'csab_2020', text: 'CSAB Round 1', value: 'csab_2020' }, { key: 'csab_2020', text: 'CSAB Round 2', value: 'csab_2020' },])
        }
        setround(false)
        sessionStorage.setItem('year', value)
        setchange('2')

    }

    const handelC = (e, { value }) => {
        sessionStorage.setItem('category', value)
        setchange('1')
    }
    const handelG = (e, { value }) => {
        sessionStorage.setItem('pool', value)
        setchange('1')
    }
    const handelR = (e, { value }) => {
        if (value.match(/^[0-9]+$/) != null) {
            sessionStorage.setItem('rank', value)
            setchange('1')
        }
    }
    const handelQ = (e, { value }) => {
        sessionStorage.setItem('quota', value)
        setchange('1')
    }
    const handelRou = (e, { value }) => {
        sessionStorage.setItem('round', value)
        setchange('1')
    }
    const handelO = (e, { value }) => {
        sessionStorage.setItem('option', value)
        setchange('1')
    }

    const buttonClick = () => {
        if (ins && categoryValue && seat_pool && quotaValue && roundValue && yearValue && option && rank) {
            console.log('done')
            sessionStorage.setItem("result", true)
            history.push('/result')
        }
        else {
            seterror("Please Enter in all the Fields")
        }
    }

    return (
        <>
            <MenuHeader active="prediction" />
            <h2 className="pageHeading">Opening and Closing Rank SOCE Prediction</h2>
            {error ? <div className='message'>{error}</div> : <></>}
            <Form>
                <Form.Group widths="equal">
                    <Form.Select
                        fluid
                        label='Institute'
                        options={options}
                        placeholder='Select Institute'
                        onChange={instituteChange}
                    />
                    <Form.Select
                        fluid
                        label='Category'
                        options={category}
                        placeholder='Select Category'
                        onChange={handelC}
                    />
                    <Form.Select
                        fluid
                        label='Gender'
                        options={pool}
                        placeholder='Select Gender'
                        onChange={handelG}
                    />
                    <Form.Select
                        fluid
                        label='Quota'
                        options={quota}
                        disabled={disable}
                        placeholder='Select Quota'
                        onChange={handelQ}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Enter your Rank' placeholder={placeHolder} disabled={disable} onChange={handelR} />
                    <Form.Select
                        fluid
                        label='Choose Option'
                        options={type}
                        placeholder='Choose Option'
                        disabled={disable}
                        onChange={handelO}
                    />
                    <Form.Select
                        fluid
                        label='Year'
                        options={year}
                        placeholder='Select Year'
                        disabled={disable}
                        onChange={roundChange}
                    />
                    <Form.Select
                        fluid
                        label='Round'
                        options={roundArray}
                        placeholder='Select Round'
                        disabled={round}
                        onChange={handelRou}
                    />
                </Form.Group>

                <Form.Button disabled={disable} onClick={buttonClick} >Predict</Form.Button>
            </Form>
            <br /><br /><br /><br />
            <Footer />
        </>
    )
}
