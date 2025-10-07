local messages = {
'Created by zyex!',
'Enjoy :D'
}

for _, v in ipairs(messages) do
game.TextChatService.TextChannels.RBXGeneral:SendAsync(tostring(v))
task.wait(0.3)
end

loadstring(game:HttpGet('https://github.com/zyexil/LightsoftProductions/raw/refs/heads/main/lua1.lua', true))()
