import * as React from 'react';
import { createDate, InvalidDateException } from 'historical-dates';
import { RomanNumber, RomanNumberState } from './roman-number';

export type DateProps = {
    onChange: (value: DateProps) => void,
    calendar: 'gregorian' | 'julian',
    day: number | undefined,
    month: number | undefined,
    year: number | undefined,
    yearText: string,
    valid?: boolean
}

/**
 * Extremely primitive date component: with easy input of old years (1500ish)
 */
export class PlainDate extends React.Component<DateProps, DateProps> {
    static defaultProps = {
        onChange: function () { },
        calendar: 'gregorian',
        valid: true
    }

    constructor(props: DateProps) {
        super(props);
        this.state = Object.assign({}, props, { valid: true });
    }

    componentWillReceiveProps(nextProps: DateProps) {
        this.setState((prevState, props) => {
            if (prevState.calendar !== nextProps.calendar) {
                nextProps = this.parseState(nextProps);
                // if the calendar changes, the date needs to be recalculated
                props.onChange(nextProps);
            }
            return nextProps;
        });
    }

    change = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let newValue = {
            [event.target.name]: parseInt(event.target.value.replace(/[^0-9]/g, '')) || 0
        };
        this.setState((prevState, props) => {
            let newState = this.parseState(
                Object.assign({},
                    prevState,
                    newValue));
            if (newState.valid) {
                props.onChange(newState);
            }
            return newState;
        });
    }

    changeYear = (year: RomanNumberState) => {
        this.setState((prevState, props) => {
            let newState = this.parseState(
                Object.assign({},
                    prevState,
                    year.type !== 'invalid' ?
                        {
                            year: year.value,
                            yearText: year.text,
                            valid: true
                        } : {
                            valid: false
                        }));
            if (newState.valid) {
                props.onChange(newState);
            }
            return newState;
        });
    }

    parseState(newState: DateProps) {
        try {
            let date = createDate(newState.year, newState.month, newState.day, newState.calendar);
            return Object.assign({}, newState, { date, valid: true });
        } catch (error) {
            if (error instanceof InvalidDateException) {
                return Object.assign({}, newState, { valid: false });
            } else {
                throw error;
            }
        }
    }

    render() {
        const {
            day,
            month,
            yearText,
            valid
        } = this.state;
        const selectClassName = valid ? "select" : "select is-danger",
            inputClassName = valid ? "input" : "input is-danger";
        return (
            <div className="field has-addons">
                <div className="control">
                    <div className={selectClassName}>
                        <select name='day' value={day} onChange={this.change}>
                            {
                                this.days().map(dateDay =>
                                    <option key={dateDay || 0} value={dateDay}>{dateDay === undefined ? '' : `${dateDay}`}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="control">
                    <div className={selectClassName}>
                        <select name='month' value={month} onChange={this.change}>
                            {
                                ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((dateMonth, index) =>
                                    <option key={index} value={index === 0 ? undefined : index}>{dateMonth}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="control">
                    <RomanNumber className={inputClassName} value={yearText} onChange={this.changeYear} />
                </div>
            </div>
        )
    }

    days() {
        let days: (number | undefined)[] = [undefined];
        for (let day = 1; day < 32; day++) {
            days.push(day);
        }
        return days;
    }
}
