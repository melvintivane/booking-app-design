import React, { useState } from 'react';
import "./Header.css"
import { faBed, faCalendarDays, faCar, faMagnet, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({type}) => {
	const [destination, setDestination] = useState("");
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1
	});

	const navigate = useNavigate();

	const handleSearch = () => {
		navigate("/hotels", {state: { destination, date, options } });
	}

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	const handleOpenDate = () => {
		setOpenDate(!openDate);
		setOpenOptions(false);
	}
	const handleOpenOptions = () => {
		setOpenOptions(!openOptions);
		setOpenDate(false);
	}


	return (
		<div className='header'>
			<div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
				<div className="headerList">
					<div className="headerListItem active">
						<Link className='link'>
							<FontAwesomeIcon className='icon' icon={faBed} />
							<span>Stays</span>
						</Link>
					</div>
					<div className="headerListItem">
						<Link className='link'>
							<FontAwesomeIcon className='icon' icon={faPlane} />
							<span>Flights</span>
						</Link>
					</div>
					<div className="headerListItem">
						<Link className='link'>
							<FontAwesomeIcon className='icon' icon={faCar} />
							<span>Car rentals</span>
						</Link>
					</div>
					<div className="headerListItem">
						<Link className='link' to="/attractions">
							<FontAwesomeIcon className='icon' icon={faMagnet} />
							<span>Attractions</span>
						</Link>
					</div>
					<div className="headerListItem">
						<Link className='link'>
							<FontAwesomeIcon className='icon' icon={faTaxi} />
							<span>Airport taxis</span>
						</Link>
					</div>
					</div>
					{ type == "home" && <>
					<h1 className="headerTitle">
						Find your next stay
					</h1>
					<p className="headerDesc">
						Search low prices on hotels, homes and much more...
					</p>
					<div className="headerSearch">
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faBed} className='headerIcon' />
							<input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={ (e)=> setDestination(e.target.value) }/>
						</div>						
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
							<span onClick={handleOpenDate} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
							{openDate && <DateRange
								editableDateInputs={true}
								onChange={item => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
								className='date'
								minDate={new Date()}
							/>}
						</div>
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faPerson} className='headerIcon' />
							<span onClick={handleOpenOptions} className="headerSearchText">{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
							{openOptions && 
							<div className="options" >
								<div className="optionItem">
									<span className="optionText">Adult</span>
									<div className='counter'>
										<button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "decrease")}>-</button>
										<span className="optionCounterNumber">{options.adult}</span>
										<button className="optionCounterButton" onClick={() => handleOption("adult", "increase")}>+</button>
									</div>
								</div>
								<div className="optionItem">
									<span className="optionText">Children</span>
									<div className='counter'>	
										<button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "decrease")}>-</button>
										<span className="optionCounterNumber">{options.children}</span>
										<button className="optionCounterButton" onClick={() => handleOption("children", "increase")}>+</button>
									</div>
								</div>
								<div className="optionItem">
									<span className="optionText">Room</span>
									<div className='counter'>
										<button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "decrease")}>-</button>
										<span className="optionCounterNumber">{options.room}</span>
										<button className="optionCounterButton" onClick={() => handleOption("room", "increase")}>+</button>
									</div>
								</div>
								<div className="optionItem">
									<button className='doneBtn'>Done</button>
								</div>
							</div>}
						</div>
						<div className="headerSearchItem">
						<button className="headerBtn" onClick={handleSearch}>Search</button>
					</div>
				</div></>}
					{ type == "attractions" && <>
					<h1 className="headerTitle">
						Attractions, activities and experiences
					</h1>
					<p className="headerDesc">
						Discover new attractions and experiences to match your interests and travel style
					</p>
					<div className="headerSearch">
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faBed} className='headerIcon' />
							<input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={ (e)=> setDestination(e.target.value) }/>
						</div>						
						<div className="headerSearchItem">
							<FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
							<span onClick={handleOpenDate} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
							{openDate && <DateRange
								editableDateInputs={true}
								onChange={item => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
								className='date'
								minDate={new Date()}
							/>}
						</div>
						<div className="headerSearchItem">
						<button className="headerBtn" onClick={handleSearch}>Search</button>
					</div>
				</div></>}
			</div>
		</div>
	)
}

export default Header