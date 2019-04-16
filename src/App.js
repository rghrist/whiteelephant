import React, { Component } from 'react';
import ListItem from './components/ListItem';
import Round from './components/Round';
import RoundHistory from './components/RoundHistory';
import Names from './components/Names';
import Items from './components/Items';
import DropDownItem from './components/DropdownItem';
import ListContainer from './components/ListContainer';

class App extends Component {
  constructor(){
    super();
    this.state = { roundNumber: 1, 
                    newName: '',
                    names: [], 
                    gifts: [],
                    newGift: '',
                    roundHistory: [],
                    actions: [],
                    selectedName: '',
                    selectedGift: '',
                    stolenItems: {}}
  }

  updateRound = () => {
    this.setState({ roundNumber: this.state.roundNumber + 1,
                    roundHistory: [...this.state.roundHistory, ...this.state.actions],
                    actions: [],
                    stolenItems: {}});
  }

  updateStolenCount = () => {
    const newStolen = {...this.state.stolenItems};
    const selectedGift = this.state.selectedGift
    console.log(this.state.gifts)
    if (selectedGift in newStolen){
      const oldCount = newStolen[selectedGift];
      newStolen[selectedGift] = oldCount + 1;
      this.setState({ stolenItems: newStolen})
    } else if (this.state.gifts.find(k => k === selectedGift)) {
      newStolen[selectedGift] = 1;
      this.setState({ stolenItems: newStolen })
    } else {
      newStolen[selectedGift] = 0;
      this.setState({ stolenItems: newStolen })
    }
    console.log(this.state.stolenItems);
  }

  setName = (name) => {
    this.setState({ selectedName: name});
  }

  setGift = (gift) => {
    this.setState({ selectedGift: gift});
  }

  addName = () => {
    this.setState({ selectedName: this.state.newName});
    this.setState({ names: [...this.state.names, this.state.newName], newName: ''});
  }

  addGift = () => {
    this.setState({ selectedGift: this.state.newGift});
    this.setState({ gifts: [...this.state.gifts, this.state.newGift],
                            newGift: '',
                            })
                
  }

  submitAction = () => {
    this.setState({ actions: [...this.state.actions, `Round #${this.state.roundNumber} : ${this.state.selectedName.toUpperCase()} gets ${this.state.selectedGift.toUpperCase()}`],
                    selectedGift: '', selectedName: ''})
    this.updateStolenCount();
  }

  filterStolen = () => {
    const stolen = this.state.stolenItems;
    const result = Object.keys(stolen)
                          .reduce((o, key) => {
                            stolen[key] !== 0 && (o[key] = stolen[key]);
                            return o;
                            }, {});
    return result;
  }

  render() {
    const filteredStolen = this.filterStolen();
    const sortedNames = this.state.names.sort();

    const formattedActions = this.state.actions.map(t => <ListItem key={t} myKey={t} value={t} />);
    const formattedHistory = this.state.roundHistory.map(t => <ListItem key={t} myKey={t} value={t} />);
    const formattedSteals = Object.entries(filteredStolen).map(t => <ListItem key={t} myKey={t} value={t} />)
    const formattedNames = sortedNames.map(t => <DropDownItem key={t} selectItem={() => this.setName(t)} myKey={t} value={t} />);
    const formattedGifts = this.state.gifts.map(t => <DropDownItem key={t} selectItem={this.setGift} myKey={t} value={t} />);

    const controlPanelStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }

    return (
      <div className="App">
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" >
          <Round round={ this.state.roundNumber } actions={ formattedActions } updateRound={ this.updateRound} />
          <hr style={{ height: '10px', backgroundColor: 'black'}}></hr>
          <h4>Steal Counts:</h4>
          <ListContainer items={ formattedSteals }/>
          <RoundHistory formattedHistory={ formattedHistory } />
        </div>
        <div className="col-lg-7 col-sm-7 col-sm-7 col-xs-7" style={ controlPanelStyle }>
          <Names names={ formattedNames } selectedName={this.state.selectedName} value={this.state.newName} onChange={(e) => this.setState({ newName: e.target.value })} addPlayer={this.addName}/>
          <Items gifts={ formattedGifts } selectedGift={this.state.selectedGift} value={this.state.newGift} onChange={(e) => this.setState({ newGift: e.target.value })} addGift={this.addGift}/>
          <div className="col-lg-1 col-sm-1 col-sm-1 col-xs-1 pull-right">
            <button className="btn btn-success" onClick={this.submitAction}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
