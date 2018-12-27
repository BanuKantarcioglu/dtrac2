# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_27_194155) do

  create_table "document_types", force: :cascade do |t|
    t.string "description"
    t.boolean "active", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents", force: :cascade do |t|
    t.date "startdate"
    t.date "enddate"
    t.integer "personnel_id"
    t.integer "document_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "do_not_track"
    t.boolean "istracking", default: true
    t.index ["document_type_id"], name: "index_documents_on_document_type_id"
    t.index ["personnel_id"], name: "index_documents_on_personnel_id"
  end

  create_table "personnels", force: :cascade do |t|
    t.string "name"
    t.integer "pno"
    t.string "jobdescription"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
