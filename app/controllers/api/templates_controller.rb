class Api::TemplatesController < ApplicationController

  def index
    update_template_column
    render json: @template_path
  end

  private

  def update_template_column
    @post = Post.find_by(id: 2)  ##インスタンスの作り方をきく
    @template_path = {}
      if @post.path.match("^template.*")
        @post.template = true
        @template_path = {id: @post.id, path: @post.path.sub("template/", ""), body: template_variable(@post.body)}
      end
  end

  def template_variable(body)
    case body
    when /.*%{year}.*/
      @template_body = body.gsub("%{year}", "#{Date.today.year - 2000}")
      template_variable(@template_body)
    when ".*%{Year}.*"
      body.gsub("%{Year}", Date.today.year)
      template_variable(@template_body)
    when ".*%{jyear}.*"
      body.gsub("%{jyear}", "H"+"#{Date.today.year - 2000 + 12}")
      template_variable(@template_body)
    when ".*%{Jyear}.*"
      body.gsub("%{Jyear}", "平成"+"#{Date.today.year - 2000 + 12}")
      template_variable(@template_body)
    when ".*%{jfyear}.*"
      body.gsub("%{jfyear}", "#{Date.today.year - 2000 + 11}")
      template_variable(@template_body)
    when ".*%{Jfyear}.*"
      body.gsub("%{Jfyear}", "#{Date.today.year - 2000 + 11}")
      template_variable(@template_body)
    when ".*%{month}.*"
      body.gsub("%{month}", "#{Date.today.month}")
      template_variable(@template_body)
    when ".*%{Month}.*"
      body.gsub("%{Month}", "#{Date.today.strftime('%b')}")
      template_variable(@template_body)
    when ".*%{Month}.*"
      body.gsub("%{Month}", "#{Date.today.strftime('%b')}")
      template_variable(@template_body)
    when ".*%{Week}.*"
      body.gsub("%{Week}", "#{Date.today.strftime('%a')}")
      template_variable(@template_body)
    when /.*%{day}.*/
      body.gsub("%{day}", "#{Date.today.day}")
      template_variable(@template_body)
    when /.*%{me}.*/ || /.*%{screen_name}.*/
      @template_body = body.gsub("%{me}", "#{current_user.name}")
      template_variable(@template_body)
    else
      @template_body = body
    end
  end
end
