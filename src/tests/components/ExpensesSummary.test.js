import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test ('Should render with 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

test ('Should render with 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>)
    expect(wrapper).toMatchSnapshot()
})

test ('Should render with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})