import { Championship } from "../Championship";
import { ChampionshipTeam } from "../ChampionshipTeam";
import { Match } from "../Match";
import { Team } from "../Team";

Championship.hasMany(ChampionshipTeam, { foreignKey: 'championshipId' });
Championship.hasMany(Match, { foreignKey: 'championshipId' });
Championship.belongsTo(Team, { foreignKey: 'teamWinnerId' });

ChampionshipTeam.belongsTo(Championship, { foreignKey: 'championshipId' });
ChampionshipTeam.belongsTo(Team, { foreignKey: 'teamId' });

Team.hasMany(ChampionshipTeam, { foreignKey: 'teamId' });
Team.hasMany(Match, { foreignKey: 'team1Id' });
Team.hasMany(Match, { foreignKey: 'team2Id' });
Team.hasMany(Match, { foreignKey: 'teamWinnerId' });
Team.hasMany(Championship, { foreignKey: 'teamWinnerId'});

Match.belongsTo(Championship, {foreignKey: 'championshipId'});
Match.belongsTo(Team, { foreignKey: 'team1Id' });
Match.belongsTo(Team, { foreignKey: 'team2Id' });
Match.belongsTo(Team, { foreignKey: 'teamWinnerId' });
