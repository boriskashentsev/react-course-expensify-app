import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow (
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    )
})

test('should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render expense list filters with altfilters correctly', () => {
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test ('should handle text change', () => {
    const value = 'New Text'
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test ('should sort by date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})

test ('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    })
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate)
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate)
})

test('should handle date focus change', () => {
    const value = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(value)
    expect(wrapper.state('calendarFocused')).toBe(value)
})