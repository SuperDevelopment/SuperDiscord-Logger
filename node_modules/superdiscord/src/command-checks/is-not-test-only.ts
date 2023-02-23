import { Guild } from 'discord.js'
import SuperDiscord from '..'
import Command from '../Command'

export = (guild: Guild | null, command: Command, instance: SuperDiscord) => {
  const { testOnly } = command

  if (!testOnly) {
    return true
  }

  return guild && instance.testServers.includes(guild.id)
}
